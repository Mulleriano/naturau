<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { RouterLink, useRouter } from "vue-router";
import { dadosPet } from "../api";

const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const show1 = ref(false);
let loadingGoogle = ref(false);
let loadingBtn = ref(false);

//metodos
const login = () => {
  loadingBtn.value = true;
  //precisa de .value por conta do ref()
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    //retorna uma promise
    .then((data) => {
      loadingBtn.value = false;
      alert("Login realizado com sucesso!");
      router.push("/naturau");
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
          errMsg.value = "Email ou senha incorreto";
          break;
      }
    });
};

const signInWithGoogle = () => {
  loadingGoogle.value = true;
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then(async (result) => {
    loadingGoogle = false;
      const res = await dadosPet(result.user.uid);
      if (res) {
        router.push("/naturau");
      }
      router.push("/hello");
    })
    .catch((error) => {
      alert("Algo deu errado");
    });
};
</script>

<template>
  <v-container class="w-100 h-100 bg">
    <v-form class="w-100 h-100 d-flex align-center justify-center">
      <v-card
        color="transparent"
        elevation="0"
        class="w-75 d-flex flex-column align-center"
      >
        <v-img class="mx-auto" width="80%" src="/public/imgs/logo.png"></v-img>
        <v-card-title>Login</v-card-title>
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
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:append-inner="show1 = !show1"
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
          <v-btn
            :loading="loadingBtn"
            @click="login"
            :disabled="!email || !password"
            rounded="xl"
            color="#2a6141"
            variant="tonal"
            class="mt-2"
            block
            >Entrar</v-btn
          >
          <v-btn
            :loading="loadingGoogle"
            @click="signInWithGoogle"
            variant="outlined"
            rounded="xl"
            class="mt-4 px-5"
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
  </v-container>
</template>
