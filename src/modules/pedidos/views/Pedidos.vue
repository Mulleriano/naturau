<script setup>
import { onMounted, ref } from "vue";
import { pedidosStore } from "../store";
import { useRouter } from "vue-router";
import { load } from "webfontloader";

const router = useRouter();
let loading = ref(false);

function voltar() {
  router.go(-1);
}

function filtrarPedidos(filtro) {
  const concluidos = pedidosStore.pedidos.filter(
    (pedido) => pedido.status == "concluido"
  );
  const emAndamento = pedidosStore.pedidos.filter(
    (pedido) => pedido.status == "em andamento"
  );

  if (filtro == "concluidos") return concluidos;

  return emAndamento;
}

onMounted(async () => {
  loading.value = true;
  await pedidosStore.pegarPedidos();
  loading.value = false;
});
</script>
<template>
  <v-sheet v-if="loading" position="fixed" location="center">
    <v-progress-circular color="#8dd8c1" indeterminate></v-progress-circular>
  </v-sheet>

  <v-app-bar>
    <v-app-bar-nav-icon @click="voltar"
      ><v-icon>mdi-arrow-left</v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-title>Lista de pedidos</v-app-bar-title>
  </v-app-bar>

  <v-container v-if="!loading">
    <h2 class="text-green-darken-4">Em andamento</h2>

    <p
      v-if="filtrarPedidos('em andamento').length == 0"
      class="text-grey-darken-2 font-italic"
    >
      Nenhum Pedido em andamento
    </p>

    <v-card
      class="my-5 pa-3"
      elevation="10"
      v-for="pedido in filtrarPedidos('em andamento')"
      :key="pedido.id"
    >
      <router-link :to="`/pedidos/${pedido.id}`">
        <v-card-title>{{ pedido.titulo }}</v-card-title>
      </router-link>
    </v-card>

    <h2 class="text-green-darken-4">Concluídos</h2>

    <p
      v-if="filtrarPedidos('concluidos').length == 0"
      class="text-grey-darken-2 font-italic"
    >
      Você ainda não fez nenhum pedido
    </p>

    <v-card
      class="my-5 pa-3"
      elevation="10"
      v-for="pedido in filtrarPedidos('concluidos')"
      :key="pedido.id"
    >
      <router-link :to="`/pedidos/${pedido.id}`">
        <v-card-title class="text-grey">{{ pedido.titulo }}</v-card-title>
      </router-link>
    </v-card>
  </v-container>
</template>
