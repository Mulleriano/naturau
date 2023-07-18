<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function irPara(rota) {
  router.push(rota);
}
</script>

<template>
  <v-container class="pl-8 h-25 w-100 d-flex flex-column justify-center">
    <h3 class="mb-2">Olá, humano.</h3>
    <p class="text-start w-75">
      Preparado para mudar a <br />
      alimentação e invertir na saúde <br />
      do seu melhor amigo?
    </p>
  </v-container>
  <v-btn
    density="compact"
    icon="mdi-arrow-right-thin"
    size="x-large"
    @click="irPara('/pet-name')"
    variant="plain"
    location="bottom"
    position="fixed"
    class="mb-5"
  ></v-btn>
</template>
