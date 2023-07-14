<script setup>
import {petStore} from "../store"
import { reactive } from "vue";
import { ref } from "vue";

const restricao = ref("");

const payload = reactive({ 
  tipo: "",
  sexo: "",
  sn: "",
  restricao: [],
})

function arrayRestricao(restricao){
  let semVirgula = restricao.replaceAll(",", "")
  payload.restricao = semVirgula.split(" ")
  console.log(semVirgula)
}

function handleDetail(toggle, escolha){
  toggle();
  switch(escolha){
    case "gato":
    payload.tipo = escolha;
    break;
    case "cachorro":
    payload.tipo = escolha;
    break;
    case "femea":
    payload.sexo = escolha;
    break;
    case "macho":
    payload.sexo = escolha;
    break;
    case "sim":
    payload.sn = escolha;
    break;
    case "nao":
    payload.sn = escolha;
    break;
  }
}
</script>

<template>
  <v-card
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
            @click="handleDetail(toggle, 'gato')"
            :color="isSelected ? '#8dd8c1' : 'white'"
            rounded="xl"
            class="ma-5 pl-10 pr-10"
            >Gato</v-btn
          >
        </v-item>
        <v-item v-slot="{ isSelected, toggle }">
          <v-btn
            @click="handleDetail(toggle, 'cachorro')"
            :color="isSelected ? '#8dd8c1' : 'white'"
            rounded="xl"
            class="ma-5"
            >Cachorro</v-btn
          >
        </v-item>
      </div>
    </v-item-group>
    <v-item-group mandatory>
      <p class="text-body-1">Qual é seu sexo?</p>
      <div class="d-flex justify-space-around mt-2">
        <v-item v-slot="{ isSelected, toggle }">
          <v-btn
            @click="handleDetail(toggle, 'femea')"
            :color="isSelected ? '#8dd8c1' : 'white'"
            rounded="xl"
            class="ma-5 pl-8 pr-8"
            >Fêmea</v-btn
          >
        </v-item>
        <v-item v-slot="{ isSelected, toggle }">
          <v-btn
            @click="handleDetail(toggle, 'macho')"
            :color="isSelected ? '#8dd8c1' : 'white'"
            rounded="xl"
            class="ma-5 pl-8 pr-8"
            >Macho</v-btn
          >
        </v-item>
      </div>
    </v-item-group>
    <v-item-group mandatory>
      <p class="text-body-1">Tem algo que você não pode comer?</p>
      <div class="d-flex justify-space-around mt-2">
        <v-item v-slot="{ isSelected, toggle }">
          <v-btn
            @click="handleDetail(toggle, 'nao')"
            :color="isSelected ? '#8dd8c1' : 'white'"
            rounded="xl"
            class="ma-5 pl-11 pr-11"
            >Não</v-btn
          >
        </v-item>
        <v-item v-slot="{ isSelected, toggle }">
          <v-btn
            @click="handleDetail(toggle, 'sim')"
            :color="isSelected ? '#8dd8c1' : 'white'"
            rounded="xl"
            class="ma-5 pl-12 pr-12"
            >Sim</v-btn
          >
        </v-item>
      </div>
    </v-item-group>
    <v-textarea
      rows="1"
      variant="underlined"
      color="#2a6141"
      v-model="restricao"
      label="Restrições"
      placeholder="Nos conte o que é"
      clearable
      hide-details="auto"
      class="w-100 mt-4 text-teal-darken-2"
    >
    </v-textarea>
  </v-card>
  <v-btn
    size="large"
    @click="(petStore.fim(payload)), (this.$router.push('/naturau')), (arrayRestricao(restricao))"
    rounded="xl"
    color="#8ad7c0"
    location="bottom"
    position="fixed"
    class="mb-16 w-50"
    >Próximo</v-btn
  >
</template>
