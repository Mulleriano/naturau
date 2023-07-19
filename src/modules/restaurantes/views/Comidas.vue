<script setup>
import { onMounted, ref } from "vue";
import { comidasStore } from "../store";
import { petStore } from "@/modules/auth/store";
import ComidasLista from "../components/ComidasLista.vue";
import { useRoute } from "vue-router";

let loading = ref(true);

const route = useRoute();
onMounted(async () => {
  loading.value = true;
  await petStore.pegarUser();
  await comidasStore.pegarComidas(route.params.restId);
  loading.value = false;
});
</script>
<template>
  <v-sheet v-if="loading" position="fixed" location="center">
    <v-progress-circular color="#8dd8c1" indeterminate></v-progress-circular>
  </v-sheet>

  <v-sheet v-if="!loading">
    <v-img src="/public/imgs/comidas.jpeg"></v-img>
    <v-card
      height="100%"
      width="100%"
      color="#fafafa"
      position="fixed"
      style="top: 25%; right: 0"
      class="rounded-t-xl elevation-10 d-flex flex-column"
    >
      <v-card-title class="font-weight-bold text-orange my-5">
        Bateu fominha {{ petStore.petDados?.petName }}?
      </v-card-title>
      <ComidasLista />
    </v-card>
  </v-sheet>
</template>
