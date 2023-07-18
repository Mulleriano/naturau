<script setup>
//
</script>

<template>
  <v-app>
   <v-container class="w-100 h-100 bg">
    <v-btn density="compact" icon="mdi-arrow-right-thin" size="x-large" @click="this.$router.push('/login')" variant="plain" location="bottom" position="fixed" class="mb-5"></v-btn>
   </v-container> 
  </v-app>
</template>

<style>

.bg {
  background-image: url("/public/imgs/home.jpg");
  background-size: cover;
  background-position: center;
}


</style>