<script setup>
import { onMounted } from "vue";
import { pedidosStore } from "../store";

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

onMounted(() => {
  pedidosStore.pegarPedidos();
});
</script>
<template>
  <h2>Em andamento</h2>
  <v-card v-for="pedido in filtrarPedidos('em andamento')" :key="pedido.id">
    <router-link :to="`/pedidos/${pedido.id}`">
      <v-card-title>{{ pedido.titulo }}</v-card-title>
    </router-link>
  </v-card>
  <h2>Concluídos</h2>
  <v-card v-for="pedido in filtrarPedidos('concluidos')" :key="pedido.id">
    <router-link :to="`/pedidos/${pedido.id}`">
      <v-card-title color="grey">{{ pedido.titulo }}</v-card-title>
    </router-link>
  </v-card>
</template>
