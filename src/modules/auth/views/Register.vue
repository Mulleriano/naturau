<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confpass = ref("");
const isFormValid = ref(true);
const router = useRouter();

//metodos
const cadastro = () => {
  //precisa de .value por conta do ref()
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    //retorna uma promese
    .then((data) => {
      alert("Registrado com sucesso");
      router.push("/hello");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const passwordconf = (value) => {
  if (value !== password.value) return "Senha incorreta";
  return true;
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
<v-form @submit.prevent v-model="isFormValid"
 class="w-100 h-100 d-flex align-center justify-center">
    <v-card title="Cadastro" elevation="0" class="w-75  d-flex flex-column align-center">
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
    <v-text-field
    variant="outlined"
      v-model="password"
      type="password"
      label="Confirme sua senha"
      clearable
      hide-details="auto"
      class="w-100 ma-4"
    >
    </v-text-field>
    <v-card-actions class="d-flex flex-column">
        <v-btn :disabled="isFormValid" @click="cadastro" rounded="xl"
      color="#2a6141" variant="tonal" class="mt-2" block
      >Cadastrar</v-btn
    >
        <v-btn
      @click="signInWithGoogle"
      variant="outlined"
      rounded="xl"
      class="mt-4"
      prepend-icon="mdi-google"
      >Cadastre com o Google</v-btn
    >
    <p class="mt-4">
      Ja tem uma conta?
      <router-link class="text-decoration-none" to="/login"
        >Login</router-link
      >
    </p>
    </v-card-actions>
    </v-card>    
    </v-form>

</template>