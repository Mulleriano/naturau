<script setup>
import { onMounted, ref } from "vue";
import { comidasStore } from "../store";
import { useRoute, useRouter } from "vue-router";
import { restStore } from "../store";

const route = useRoute();
const router = useRouter();
const restId = route.params.restId;
const comidaId = route.params.comidaId;
let loadingBtn = ref(false);

async function pedir() {
  loadingBtn.value = true;
  try {
    await comidasStore.adicionarPedido(restStore.restaurante);
  } catch {
    alert("Tivemos um problema, tente novamente");
  } finally {
    loadingBtn.value = false;
    router.push("/pedidos");
  }
}

onMounted(async () => {
  await restStore.pegarDadosRest(restId);
  await comidasStore.filtrarComida(restId, comidaId);
});
</script>
<template>
  {{ loadingBtn }}
  <v-app-bar>
    <v-app-bar-nav-icon @click="this.$router.go(-1)"
      ><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon
    >
    <v-app-bar-title> {{ comidasStore.comida?.titulo }} </v-app-bar-title>
  </v-app-bar>

  <v-card position="fixed" location="top" width="100%">
    <v-img cover :src="comidasStore.comida.img"></v-img>
  </v-card>

  <div>
    <v-card
      height="auto"
      width="100%"
      color="#fafafa"
      position="fixed"
      style="top: 30%; right: 0"
      class="pb-4 rounded-xl elevation-10 d-flex justify-space-between align-center pa-3"
    >
      <div>
        <v-card-title class="text-orange">
          Por {{ restStore.restaurante.nome }}
        </v-card-title>
        <v-card-subtitle>
          <v-icon>mdi-map-marker</v-icon>
          Distância {{ restStore.restaurante.distancia }}
        </v-card-subtitle>
      </div>
      <div class="text-end pt-2">
        <v-rating
          size
          v-model="restStore.restaurante.avaliacoes"
          half-increments
          readonly
        >
        </v-rating>
        <p color="#fe8b05">R$ {{ comidasStore.comida.preco }},00</p>
      </div>
    </v-card>

    <v-sheet
      width="80%"
      height="100px"
      position="fixed"
      location="center"
      color="transparent"
    >
      <v-btn
        :loading="loadingBtn"
        @click="pedir"
        color="#fe8b05"
        block
        rounded
        class="pa-7 elevation-10 text-white"
      >
        Pedir R${{ comidasStore.comida.preco }},00
      </v-btn>
    </v-sheet>
  </div>
</template>
