<script setup>
import { restStore } from "../store";
</script>

<template>
  <v-card
    class="d-flex justify-space-between my-4 pa-8"
    location="top"
    color="grey"
    v-for="restaurante in restStore.restaurantes"
    :key="restaurante.id"
  >
    <div class="w-25">
      <v-img
        height="100%"
        aspect-ratio="1/1"
        cover
        :src="restaurante.img"
      ></v-img>
    </div>
    <div class="w-50 pa-4">
      <router-link class="text-sm-h4" :to="`/comidas/${restaurante.id}`">{{
        restaurante.nome
      }}</router-link>

      <p>
        <v-icon>mdi-map-marker</v-icon>
        Distância: {{ restaurante.distancia }}
      </p>
    </div>
    <div class="my-4 w-25">
      <v-rating
        v-model="restaurante.avaliacoes"
        half-increments
        readonly
      ></v-rating>
    </div>
  </v-card>
</template>
