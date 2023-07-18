<script setup>
import { onMounted } from "vue";
import { comidasStore } from "../store";
import ComidasLista from "../components/ComidasLista.vue";
import { useRoute } from "vue-router";

const route = useRoute();
onMounted(() => {
  comidasStore.pegarComidas(route.params.restId);
});
</script>
<template>
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
      Bateu fominha Ivy?
    </v-card-title>
    <ComidasLista />
  </v-card>
</template>
