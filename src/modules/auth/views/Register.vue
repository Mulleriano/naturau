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
const register = () => {
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
  <!-- Adicionar na branch css -> 
        - adicionar ou trocar o v-card por um v-form e adicinar = @submit.prevent v-model="isFormValid"
        - add :rules="[passwordconf]" no confirmaçao de senha
        - :disabled="isFormValid" no botao de cadastrar  -->
        
  <h1>Cadastro</h1>
    <v-text-field v-model="email" label="Email" clearable hide-details="auto" class="w-75">
    </v-text-field>
    <v-text-field v-model="password" type="password" label="Senha" clearable hide-details="auto" class="w-75">
    </v-text-field>
    <v-btn @click="login" variant="outlined" size="small" class="mt-2">Cadastrar</v-btn>
    <v-btn @click="signInWithGoogle" variant="outlined" size="small" class="mt-2"
      >Entre com o Google</v-btn
    >
</template>
