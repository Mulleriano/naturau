<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter(); 

//metodos
const register = () => {
  //precisa de .value por conta do ref()
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    //retorna uma promese
    .then((data) => {
      alert("Registrado com sucesso");
      router.push("/hello")
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {};
</script>

<template>

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