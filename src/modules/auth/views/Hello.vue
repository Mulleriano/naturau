<script setup></script>

<template>
  <v-container class="pl-8 h-100 w-100 d-flex flex-column justify-center bg">
    <div class="mt-10 ml-5">
      <h2 class="mb-2 text-white">Olá, humano.</h2>
      <p class="text-start text-h6 font-weight-regular text-white">
        Preparado para mudar a <br />
        alimentação e invertir na saúde <br />
        do seu melhor amigo?
      </p>
    </div>
    <v-img src="imgs/acesso-1.png"></v-img>
  </v-container>
  <v-btn
    density="compact"
    icon="mdi-arrow-right-thin"
    size="x-large"
    @click="this.$router.push('/pet-name')"
    variant="plain"
    location="bottom"
    position="fixed"
    class="mb-5"
  ></v-btn>
</template>
