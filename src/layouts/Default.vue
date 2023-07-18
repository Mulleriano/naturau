<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

function irPara(rota) {
  router.push(rota);
}

function corIcone(path) {
  return route.path.includes(path) ? "#2a6141" : "grey";
}
</script>

<template>
  <v-app>
    <v-system-bar></v-system-bar>
    <v-main>
      <router-view />
      <v-card>
        <v-bottom-navigation rounded="xl" elevation="10" class="mb-4" grow>
          <v-btn
            :active="route.path == '/naturau' ? true : false"
            @click="irPara('/naturau')"
          >
            <v-icon :color="corIcone('/naturau')"> mdi-home </v-icon>
          </v-btn>
          <v-btn
            :active="route.path.includes('/comidas') ? true : false"
            @click="irPara('/comidas')"
          >
            <v-icon :color="corIcone('/comidas')"> mdi-food-drumstick </v-icon>
          </v-btn>
          <v-btn
            :active="route.path.includes('pedidos')"
            @click="irPara('/pedidos')"
          >
            <v-icon :color="corIcone('/pedidos')"> mdi-list-box </v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-card>
    </v-main>
  </v-app>
</template>
