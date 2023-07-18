<script setup>
import { onMounted } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { petStore, imgStore } from "../store";

const router = useRouter();

const dialog = ref(false);

onMounted(async () => {
  await petStore.pegarUser();
});

const auth = getAuth();

function handleSignOut() {
  signOut(auth).then(() => {
    router.push("/login");
  });
}

function voltar() {
  router.go(-1);
}

const reloadPage = () => {
  location.reload();
};
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="voltar"
      ><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon
    >
    <v-app-bar-title> Perfil do pet</v-app-bar-title>
  </v-app-bar>

  <v-img
    min-width="50%"
    max-width="100%"
    aspect-ratio="1/1"
    cover
    :src="petStore.petDados?.profilePicture"
  >
    <v-btn
      icon="mdi-pencil"
      size="small"
      alt="Editar foto"
      @click="dialog = true"
      location="top end"
      position="absolute"
      class="ma-3"
    >
    </v-btn>
    <v-dialog v-model="dialog" width="100%">
      <v-card>
        <v-card-text class="w-100">
          <v-file-input
            label="Nova foto do pet mais lindo do mundo"
            variant="underlined"
            prepend-icon="mdi-camera"
            ref="file"
            id="image"
            @change="imgStore.img()"
            type="file"
            clear-icon="w-100"
          ></v-file-input>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn @click="dialog = false">Cancelar</v-btn>
          <v-btn @click="reloadPage()">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card
      position="absolute"
      location="bottom"
      color="#053026"
      width="90%"
      elevation="10"
      rounded="xl"
      class="d-flex justify-space-between align-center py-3 mb-4 mx-auto"
    >
      <div>
        <v-card-title class="text-white text-capitalize text-h4">{{
          petStore.petDados.petName
        }}</v-card-title>
        <v-card-subtitle class="text-white text-capitalize py-2">
          <v-icon color="white" icon="mdi-map-marker-outline pb-1"></v-icon>
          {{ petStore.petDados?.address }}
        </v-card-subtitle>
      </div>

      <div class="w-50 text-right mr-4 pb-1">
        <!-- <v-icon color="#8dd8c1" icon="mdi-pencil ma-2"></v-icon> -->
        <p class="text-grey-lighten-1 text-capitalize font-weight-light pt-4">
          {{ petStore.petDados?.sexo }}
        </p>
      </div>
    </v-card>
  </v-img>
  <v-card elevation="10" class="">
    <v-card-title>Restrições</v-card-title>
    <v-card-text>
      <v-virtual-scroll height="100" :items="petStore.petDados.restricao">
        <template v-slot:default="{ item }">
          <p class="py-1 text-capitalize text-left">
            {{ item }}
          </p>
        </template>
      </v-virtual-scroll>
    </v-card-text>
  </v-card>

  <v-sheet class="mx-auto mt-5" width="80%" height="100px" color="transparent">
    <v-btn
      size="x-large"
      @click="handleSignOut"
      rounded="xl"
      color="#fe8b05"
      block
      class="elevation-10 text-white"
    >
      Log Out
    </v-btn>
  </v-sheet>
</template>
