<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

function corIcone(path) {
  return route.path.includes(path) ? "#2a6141" : "grey";
}
</script>

<template>
  <v-app>
    <v-system-bar></v-system-bar>
    <v-main>
      <router-view />
      <v-footer>
        <v-bottom-navigation rounded="xl" elevation="10" class="mb-4" grow>
          <v-btn
            :active="route.path == '/naturau' ? true : false"
            @click="this.$router.replace('/naturau')"
          >
            <v-icon :color="corIcone('/naturau')"> mdi-home </v-icon>
          </v-btn>
          <v-btn
            :active="route.path.includes('/comidas') ? true : false"
            @click="this.$router.push('/comidas')"
          >
            <v-icon :color="corIcone('/comidas')"> mdi-food-drumstick </v-icon>
          </v-btn>
          <v-btn
            :active="route.path.includes('pedidos')"
            @click="this.$router.replace('/pedidos')"
          >
            <v-icon :color="corIcone('/pedidos')"> mdi-list-box </v-icon>
          </v-btn>
          <v-btn
            :active="route.path.includes('perfil')"
            @click="this.$router.replace('/perfil')"
          >
            <v-icon :color="corIcone('/perfil')"> mdi-paw </v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-footer>
    </v-main>
  </v-app>
</template>
