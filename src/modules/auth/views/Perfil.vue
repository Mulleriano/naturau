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
  <v-container class="w-100 mt-16 bg-green d-flex flex-column align-center">
    <v-img cover width="100%" class="mt-5 bg-red"> </v-img>
    <v-card
      elevation="0"
      width="85%"
      position="absolute"
      location="bottom"
      class="d-flex mb-2"
      rounded="lg"
    >
      <v-card elevation="0" width="80%">
        <h3 class="ma-2">Ivy</h3>
        <p class="text-caption ma-2">
          <v-icon icon="mdi-map-marker-outline pb-1"></v-icon> Rua tals lala e
          la, 123
        </p>
      </v-card>
      <v-card elevation="0" width="20%">
        <v-icon icon="mdi-pencil ma-2"></v-icon>
        <p class="text-caption ma-2">Fêmea</p>
      </v-card>
    </v-card>
  </v-container>

  <v-btn @click="handleSignOut"> Sign Out</v-btn>
</template>
