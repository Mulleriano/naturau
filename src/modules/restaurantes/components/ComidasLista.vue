<script setup>
import { comidasStore } from "../store";
</script>

<template>
  <v-card>
    <v-virtual-scroll height="60vh" class="mb-24" :items="comidasStore.comidas">
      <template v-slot:default="{ item }">
        <div
          class="d-flex justify-space-between align-center my-2 pa-8 elevation-5"
        >
          <v-img class="w-25" :src="item.img"></v-img>
          <router-link
            class="w-50 pa-4"
            :to="`/comidas/${item.restId}/${item.id}`"
          >
            <h3>{{ item.titulo }}</h3>
          </router-link>
          <p>Preço: R$ {{ item.preco }},00</p>
        </div>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<style scoped>
.text-orange {
  color: #fe8b05;
}
</style>
