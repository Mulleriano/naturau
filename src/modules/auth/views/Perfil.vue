<script setup>
import { onMounted } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { petStore } from "../store";

const router = useRouter();

onMounted(async () => {
  await petStore.pegarUser();
});

const auth = getAuth();

function handleSignOut() {
  signOut(auth).then(() => {
    router.push("/login");
  });
}
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="this.$router.go(-1)"
      ><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon
    >
    <v-app-bar-title> Perfil do pet</v-app-bar-title>
  </v-app-bar>

  <v-img width="100%" height="50%"></v-img>

  <v-card
    color="#053026"
    width="90%"
    elevation="10"
    rounded="xl"
    class="d-flex justify-space-between align-center py-4 mx-auto"
  >
    <div class="w-50 ml-5">
      <v-card-title class="text-white text-h4">{{
        petStore.petDados.petName
      }}</v-card-title>
      <v-card-subtitle class="text-white py-4">
        <v-icon color="white" icon="mdi-map-marker-outline pb-1"></v-icon>
        {{ petStore.petDados?.address }}
      </v-card-subtitle>
    </div>

    <div class="w-50 text-right mr-5">
      <v-icon color="#8dd8c1" icon="mdi-pencil ma-2"></v-icon>
      <p class="text-white pt-4">Fêmea</p>
    </div>
  </v-card>

  <v-card elevation="10" class="mt-4">
    <v-card-title>Restrições</v-card-title>
    <v-card-text>
      <p class="py-2" v-for="restricao in petStore.petDados.restricao">
        {{ restricao }}
      </p>
    </v-card-text>
  </v-card>

  <v-sheet class="mx-auto mt-5" width="80%" height="100px" color="transparent">
    <v-btn
      @click="handleSignOut"
      color="#fe8b05"
      block
      rounded
      class="pa-7 elevation-10 text-white"
    >
      Log Out
    </v-btn>
  </v-sheet>
</template>
