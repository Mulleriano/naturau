<script setup>
import { restStore } from "../store";
</script>

<template>
  <v-card
    height="150px"
    width="100%"
    color="#fafafa"
    v-for="restaurante in restStore.restaurantes"
    :key="restaurante.id"
    class="pb-4 elevation-10 d-flex justify-space-between pa-3 my-3"
  >
    <v-img
      min-width="25%"
      max-width="25%"
      aspect-ratio="1/1"
      cover
      :src="restaurante.img"
    ></v-img>

    <div class="w-50 text-left">
      <router-link :to="`/comidas/${restaurante.id}`">
        <v-card-title class="text-grey-darken-3">
          {{ restaurante.nome }}
        </v-card-title>
      </router-link>

      <v-card-subtitle>
        <v-icon color="#fe8b05">mdi-map-marker</v-icon>
        Distância: {{ restaurante.distancia }}
      </v-card-subtitle>
    </div>
    <div class="w-25 text-end pt-2">
      <v-rating
        size="20"
        color="#fe8b05"
        v-model="restaurante.avaliacoes"
        half-increments
        readonly
      ></v-rating>
    </div>
  </v-card>
</template>
