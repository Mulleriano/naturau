<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { RouterLink, useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref(); 
const router = useRouter();

//metodos
const login = () => {
  //precisa de .value por conta do ref()
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    //retorna uma promese
    .then((data) => {
      alert("Login realizado com sucesso!");
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/user-not-found":
          errMsg.value = "Nenhuma conta foi encontrada com este email";
          break;
        case "auth/wrong-password":
          errMsg.value = "Senha incorreta";
          break;
        default:
          errMsg.value = "Email ou senha incorretos";
          break;
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      router.push("/");
    })
    .catch((error) => {
      alert("Algo deu errado");
    });
};
</script>

<template>

<v-form @submit.prevent v-model="isFormValid" class="w-100 h-100 d-flex align-center justify-center">
    <v-card title="Login" elevation="0" class="w-75  d-flex flex-column align-center">
          <v-text-field
        variant="outlined"
      v-model="email"
      label="Email"
      clearable
      hide-details="auto"
      class="w-100 ma-4"
    >
    </v-text-field>
    <v-text-field
    variant="outlined"
      v-model="password"
      type="password"
      label="Senha"
      clearable
      hide-details="auto"
      class="w-100 ma-4"
    >
    </v-text-field>
    <p v-if="errMsg">{{ errMsg }}</p>
    <v-card-actions class="d-flex flex-column">
        <v-btn @click="login" rounded="xl"
      color="#2a6141" variant="tonal" class="mt-2" block
      >Entrar</v-btn
    >
        <v-btn
        :disabled="isFormValid"
      @click="signInWithGoogle"
      variant="outlined"
      rounded="xl"
      class="mt-4"
      prepend-icon="mdi-google"
      >Entre com o Google</v-btn
    >
    <p class="mt-4">
      Não tem cadastro?
      <router-link class="text-decoration-none" to="/register"
        >Registre-se</router-link
      >
    </p>
    </v-card-actions>
    </v-card>    
    </v-form>
  
</template>

<style>
body {
  background-image: url("public/bg.jpg");
}
</style>
