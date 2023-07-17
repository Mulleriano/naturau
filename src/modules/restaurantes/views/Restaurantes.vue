<script setup>
import { onMounted } from "vue";
import { restStore } from "../store";
import { petStore } from "@/modules/auth/store";
import RestList from "../components/RestList.vue";
import { ref } from "vue";

let loading = ref(true);

onMounted(async () => {
  loading.value = true;
  await restStore.pegarRestaurantes();
  loading.value = false;
});
</script>
<template>
  <v-sheet v-if="loading" position="fixed" location="center">
    <v-progress-circular color="#8dd8c1" indeterminate></v-progress-circular>
  </v-sheet>

  <v-app-bar sticky>
    <v-img src="/imgs/logo.png"></v-img>
  </v-app-bar>

  <v-card align="center" class="py-4" v-if="!loading">
    <v-card-title class="text-orange">Onde vai comer hoje {{ petStore.petDados?.petName }}?</v-card-title>

    <RestList />
  </v-card>
</template>
