<script setup>
import { db } from "@/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import { onMounted } from "vue";

const restaurantes = ref([]);

onMounted(async () => {
  const restaurantesCollection = await getDocs(collection(db, "restaurantes"));
  let restaurantesLocal = [];
  restaurantesCollection.forEach((restaurante) => {
    restaurantesLocal.push(restaurante.data());
  });
  restaurantes.value = restaurantesLocal;
});
</script>
<template>
  <v-card
    class="d-flex justify-space-between my-4 pa-8"
    location="top"
    color="grey"
    v-for="restaurante in restaurantes"
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
      <router-link
        class="text-sm-h4"
        :to="`/naturau/comidas/${restaurante.id}`"
        >{{ restaurante.nome }}</router-link
      >

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
