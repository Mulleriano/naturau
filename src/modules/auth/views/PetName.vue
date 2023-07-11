<script setup>
//
</script>

<template>
   
        <h1>Humano, qual o nome do seu pet?</h1>
    <v-text-field v-model="text" label="Nome do pet" clearable hide-details="auto" class="w-75">
    </v-text-field>

    <h3>E onde vocês moram?</h3>
    <v-text-field v-model="text" label="Endereço do pet" clearable hide-details="auto" class="w-75">
    </v-text-field>

    <v-btn size="x-large" @click="this.$router.push('/pet-detail')" 
    variant="plain" location="bottom" position="fixed" class="mb-5">Próximo</v-btn>
    
</template>