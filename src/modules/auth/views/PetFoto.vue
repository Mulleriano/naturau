<script setup>
import { onMounted } from "vue";
import { petStore, imgStore } from "../store";

onMounted(async () => {
  await petStore.pegarUser();
});
</script>

<template>
  <v-container class="w-100 h-100 bg-onda">
    <v-card
      position="relative"
      location="center"
      elevation="0"
      class="h-50 w-100 pa-5 d-flex flex-column justify-center"
    >
      <h1 class="text-teal-darken-4">Agora escolha sua melhor foto!</h1>
      <v-container class="w-100 h-50">
        <v-file-input
          label="Foto do pet mais lindo do mundo"
          variant="underlined"
          prepend-icon="mdi-camera"
          ref="file"
          id="image"
          @change="imgStore.img()"
          type="file"
          clear-icon="w-100"
        ></v-file-input>
      </v-container>
      <!-- <v-btn @click="img()">Salvar Imagem </v-btn> -->
    </v-card>
    <v-btn
      size="large"
      @click="this.$router.push('/naturau')"
      rounded="xl"
      color="#053026"
      location="bottom"
      position="fixed"
      class="mb-16 text-white w-50"
      >Próximo</v-btn
    >
  </v-container>
</template>
