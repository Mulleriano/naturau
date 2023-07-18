<script setup>
import { onMounted } from "vue";
import { pedidosStore } from "../store";
import { useRoute } from "vue-router";
import { ref } from "vue";
import Timeline from "../components/Timeline.vue";
import { converter } from "../composable/converterHora";
import { onUnmounted } from "vue";

const route = useRoute();
const id = route.params.id;
const tab = ref(null);
let data = ref("");
let loading = ref(true);

onMounted(async () => {
  loading.value = true;
  await pedidosStore.pegarPedido(id);
  data.value = await converter();
  loading.value = false;
});
</script>
<template>
  <v-sheet v-if="loading" position="fixed" location="center">
    <v-progress-circular color="#8dd8c1" indeterminate></v-progress-circular>
  </v-sheet>

  <v-app-bar>
    <v-app-bar-nav-icon @click="this.$router.push('/pedidos')"
      ><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon
    >
    <v-app-bar-title>Detalhes do pedido</v-app-bar-title>
  </v-app-bar>

  <v-container v-show="!loading">
    <v-card class="pa-6">
      <v-row>
        <v-col align="left" class="text-grey-darken-2">Feito em</v-col>
        <v-col align="right" class="text-grey-darken-2">Total</v-col>
      </v-row>
      <v-row>
        <v-col align="left">{{ data }}</v-col>
        <v-col align="right">
          <span class="text-orange-darken-4"
            >R$ {{ pedidosStore.pedido.total }},00</span
          >
        </v-col>
      </v-row>
    </v-card>
    <v-card class="my-5">
      <v-tabs color="#fe8b05" align-tabs="center" v-model="tab">
        <v-tab value="andamento">Andamento</v-tab>
      </v-tabs>
    </v-card>
    <v-window v-model="tab">
      <v-window-item value="andamento">
        <h3 class="text-center">{{ pedidosStore.pedido.titulo }}</h3>
        <Timeline />
      </v-window-item>
    </v-window>
    <v-sheet align="center">
      <v-img width="50%" src="/imgs/pedidos.jpg"></v-img>
      <p class="w-50 text-grey text-center font-weight-bold">
        Humano, o pedido da Ivy está sendo preparado!
      </p>
    </v-sheet>
  </v-container>
</template>
