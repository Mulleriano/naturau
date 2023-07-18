<script setup>
//
</script>

<template>
  <v-container class="w-100 h-100 bg-onda">
    <v-card
      color="transparent"
      position="relative"
      location="center"
      elevation="0"
      class="h-75 w-100 pa-8 d-flex flex-column justify-center"
    >
      <h2 class="mb-4 text-teal-darken-3">
        Nosso papo agora <br />
        é com X{{ petname }}
      </h2>
      <v-item-group mandatory>
        <p class="text-body-1">Qual tipo de pet você é?</p>
        <div class="d-flex justify-space-around">
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              @click="toggle"
              :color="isSelected ? '#8dd8c1' : 'white'"
              rounded="xl"
              class="ma-5 pl-10 pr-10"
              >Gato</v-btn
            >
          </v-item>
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              @click="toggle"
              :color="isSelected ? '#8dd8c1' : 'white'"
              rounded="xl"
              class="ma-5"
              >Cachorro</v-btn
            >
          </v-item>
        </div>
        <p class="text-body-1">Qual é seu sexo?</p>
        <div class="d-flex justify-space-around mt-2">
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              @click="toggle"
              :color="isSelected ? '#8dd8c1' : 'white'"
              rounded="xl"
              class="ma-5 pl-8 pr-8"
              >Fêmea</v-btn
            >
          </v-item>
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              @click="toggle"
              :color="isSelected ? '#8dd8c1' : 'white'"
              rounded="xl"
              class="ma-5 pl-8 pr-8"
              >Macho</v-btn
            >
          </v-item>
        </div>
        <p class="text-body-1">Tem algo que você não pode comer?</p>
        <div class="d-flex justify-space-around mt-2">
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              @click="toggle"
              :color="isSelected ? '#8dd8c1' : 'white'"
              rounded="xl"
              class="ma-5 pl-11 pr-11"
              >Não</v-btn
            >
          </v-item>
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              @click="toggle"
              :color="isSelected ? '#8dd8c1' : 'white'"
              rounded="xl"
              class="ma-5 pl-12 pr-12"
              >Sim</v-btn
            >
          </v-item>
        </div>
      </v-item-group>
    </v-card>
    <v-btn
      size="large"
      @click="this.$router.push('/naturau')"
      rounded="xl"
      color="#8ad7c0"
      location="bottom"
      position="fixed"
      class="mb-16 w-50"
      >Próximo</v-btn
    >
  </v-container>
</template>
