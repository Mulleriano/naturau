<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <v-app>
    <v-system-bar></v-system-bar>
    <v-main>
      <router-view />
      <v-card>
        <v-bottom-navigation grow>
          <v-btn
            :active="route.path == '/naturau' ? true : false"
            @click="this.$router.replace('/naturau')"
          >
            <v-icon> mdi-home </v-icon>
          </v-btn>
          <v-btn
            :active="route.path.includes('/comidas') ? true : false"
            @click="this.$router.push('/comidas')"
          >
            <v-icon> mdi-food-drumstick </v-icon>
          </v-btn>
          <v-btn
            :active="route.path.includes('pedidos')"
            @click="this.$router.replace('/pedidos')"
          >
            <v-icon> mdi-list-box </v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-card>
    </v-main>
  </v-app>
</template>
