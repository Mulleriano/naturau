<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { RouterLink, useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const isFormValid = ref(true);
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
  <!-- Adicionar na branch css -> 
        - adicionar ou trocar o v-card por um v-form e adicinar = @submit.prevent v-model="isFormValid"
        - :disabled="isFormValid" no botao de login  -->
  <h1>Login</h1>
  <v-text-field
    v-model="email"
    label="Email"
    clearable
    hide-details="auto"
    class="w-75"
  >
  </v-text-field>
  <v-text-field
    v-model="password"
    type="password"
    label="Senha"
    clearable
    hide-details="auto"
    class="w-75"
  >
  </v-text-field>
  <p v-if="errMsg">{{ errMsg }}</p>
  <v-btn @click="login" variant="outlined" size="small" class="mt-2"
    >Logar</v-btn
  >
  <v-btn @click="signInWithGoogle" variant="outlined" size="small" class="mt-2"
    >Entre com o Google</v-btn
  >
  <p>
    Não tem cadastro?
    <router-link class="text-decoration-none" to="/register"
      >Registre-se</router-link
    >
  </p>
</template>

<style>
body {
  background-image: url("public/bg.jpg");
}
</style>
