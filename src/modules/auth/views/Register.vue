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
const router = useRouter();
const show1 = ref(false);
const isValid = ref(true);
let loadingGoogle = ref(false);
let loadingBtn = ref(false);

//metodos
const cadastro = () => {
  loadingBtn.value = true;
  //precisa de .value por conta do ref()
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    //retorna uma promise
    .then((data) => {
      loadingBtn.value = false;
      alert("Registrado com sucesso");
      router.push("/hello");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const passwordconf = (value) => {
  if (!value || value !== password.value) {
    return "Senha incorreta";
  }
  return true;
};

const valid = (value) => {
  if (!value) {
    return "Preencha o campo";
  }
  return true;
};

const signInWithGoogle = () => {
  loadingGoogle.value = true;
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      loadingGoogle.value = false;
      router.push("/hello");
    })
    .catch((error) => {
      alert("Algo deu errado");
    });
};
</script>

<template>
  <v-container class="w-100 h-100 bg">
    <v-form
      @submit.prevent
      v-model="isValid"
      class="w-100 h-100 d-flex align-center justify-center"
    >
      <v-card
        color="transparent"
        elevation="0"
        class="w-75 d-flex flex-column align-center"
      >
        <v-img class="mx-auto" width="80%" src="/public/imgs/logo.png"></v-img>
        <v-card-title>Cadastro</v-card-title>
        <v-text-field
          variant="outlined"
          v-model="email"
          label="Email"
          :rules="[valid]"
          clearable
          hide-details="auto"
          class="w-100 ma-4"
        >
        </v-text-field>
        <v-text-field
          variant="outlined"
          v-model="password"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:append-inner="show1 = !show1"
          type="password"
          label="Senha"
          :rules="[valid]"
          clearable
          hide-details="auto"
          class="w-100 ma-4"
        >
        </v-text-field>
        <v-text-field
          variant="outlined"
          v-model="confpass"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:append-inner="show1 = !show1"
          :rules="[passwordconf]"
          type="password"
          label="Confirme sua senha"
          clearable
          hide-details="auto"
          class="w-100 ma-4"
        >
        </v-text-field>
        <v-card-actions class="d-flex flex-column">
          <v-btn
            :loading="loadingBtn"
            :disabled="!isValid"
            @click="cadastro"
            rounded="xl"
            color="#2a6141"
            variant="tonal"
            class="mt-2"
            block
            >Cadastrar</v-btn
          >
          <v-btn
            :loading="loadingGoogle"
            @click="signInWithGoogle"
            variant="outlined"
            rounded="xl"
            class="mt-4 px-5"
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
  </v-container>
</template>
