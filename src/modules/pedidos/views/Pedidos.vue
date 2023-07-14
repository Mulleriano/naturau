<script setup>
import { onMounted } from "vue";
import { pedidosStore } from "../store";

onMounted(() => {
  pedidosStore.pegarPedidos();
});
</script>
<template>
  <h2>Em andamento</h2>
  <v-card v-for="pedido in pedidosStore.pedidos.emAndamento" :key="pedido.id">
    <router-link :to="`/pedidos/${pedido.id}`">
      <v-card-title>{{ pedido.titulo }}</v-card-title>
    </router-link>
  </v-card>
  <h2>Concluídos</h2>
  <v-card v-for="pedido in pedidosStore.pedidos.concluidos">
    <router-link :to="`/pedidos/${pedido.id}`">
      <v-card-title color="grey">{{ pedido.titulo }}</v-card-title>
    </router-link>
  </v-card>
</template>
