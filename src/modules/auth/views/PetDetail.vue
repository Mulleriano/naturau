<script>
export default {
  methods: {
    handleClick() {
      this.$router.push("/pet-detail");
    },
  },
};
</script>

<template>
  <v-container>
    <h2>Nosso papo agora é com X{{ petname }}</h2>

    <p>Qual tipo de pet você é?</p>
    <div>
      <v-btn size="small" variant="plain" class="mb-5">Gato</v-btn>
      <v-btn size="small" variant="plain" class="mb-5">Cachorro</v-btn>
    </div>
    <p>Qual é seu sexo?</p>
    <div>
      <v-btn size="small" variant="plain" class="mb-5">Fêmea</v-btn>
      <v-btn size="small" variant="plain" class="mb-5">Macho</v-btn>
    </div>
    <p>Tem algo que você não pode comer?</p>
    <div>
      <v-btn size="small" variant="plain" class="mb-5">Não</v-btn>
      <v-btn size="small" variant="plain" class="mb-5">Sim</v-btn>
    </div>
    <v-btn
      size="x-large"
      @click="handleClick"
      variant="plain"
      location="bottom"
      position="fixed"
      class="mb-5"
      >Próximo</v-btn
    >
  </v-container>
</template>
