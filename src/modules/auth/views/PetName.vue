<script setup>
import { ref } from "vue";
import {petStore} from "../store"
import { reactive } from "vue";
import {onMounted} from 'vue';

const petName = ref("");
const adress = ref("");
const router = useRouter();

function irPara(rota) {
  router.push(rota);
}

const payload = reactive({ 
  petName: petName,
    address: address,  
})

const nameRules = (value) => {
  if (!value) {
    return "Insira o nome do pet";
  }
  return true;
};

const addressRules = (value) => {
  if (!value) {
    return "Insira seu endereço";
  }
  return true;
};

onMounted(async () => {
  await petStore.pegarUser();
});

</script>

<template>
  <v-container class="w-100 h-100 bg-onda">
    <v-card
    position="relative"
    location="center"
    elevation="0"
    class="h-50 w-100 pa-8 d-flex flex-column justify-center"
  >
    <h1 class="text-teal-darken-4">
      Humano,<br />
      qual o nome do <br />seu pet?
    </h1>
    <v-text-field
      variant="outlined"
      rounded="pill"
      color="#2a6141"
      v-model="petName"
      :rules="[nameRules]"
      label="Nome do pet"
      clearable
      hide-details="auto"
      class="w-100 mt-4 text-green-darken-4"
    >
      <h1 class="text-teal-darken-4">
        Humano,<br />
        qual o nome do <br />seu pet?
      </h1>
      <v-text-field
        variant="outlined"
        rounded="pill"
        color="#2a6141"
        v-model="petName"
        label="Nome do pet"
        clearable
        hide-details="auto"
        class="w-100 mt-4 text-green-darken-4"
      >
      </v-text-field>
      <h3 class="text-teal-darken-4">E onde vocês moram?</h3>
      <v-text-field
        variant="outlined"
        rounded="pill"
        color="#053026"
        v-model="text"
        label="Endereço do pet"
        clearable
        hide-details="auto"
        class="w-100 mt-4 text-green-darken-4"
      >
      </v-text-field>
    </v-card>
    <v-btn
      size="large"
      @click="petStore.proximo(payload), irPara('/pet-detail')"
      rounded="xl"
      color="#053026"
      v-model="address"
      :rules="[addressRules]"
      label="Endereço do pet"
      clearable
      hide-details="auto"
      class="w-100 mt-4 text-green-darken-4"
    >
    </v-text-field>
  </v-card>
  <v-btn
    size="large"
    :disabled="!petName || !address"
    @click=" (petStore.proximo(payload)), (irPara('/pet-detail'))"
    rounded="xl"
    color="#053026"
    location="bottom"
    position="fixed"
    class="mb-16 text-white w-50"
    >Próximo</v-btn
  > 
 </v-container>
</template>
