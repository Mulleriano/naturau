<script setup>
//
</script>

<template>
  <v-app>
    <v-main class="w-100 h-100 bg">
  <v-btn density="compact" icon="mdi-arrow-right-thin" size="x-large" @click="this.$router.push('/login')" variant="plain" location="bottom" position="fixed" class="mb-5"></v-btn>
</v-main>
  </v-app>
</template>

<style>

.bg {
  background-image: url("public/bg.jpg");
}


</style>