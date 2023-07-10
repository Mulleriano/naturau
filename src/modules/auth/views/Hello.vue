<script>
// import { RouterLink, useRouter } from "vue-router";
// const router = useRouter(); 
// const click = () => {
//      handleClick() 
//          router.push("/pet-name");
    
// }
export default  {
    methods: {
    handleClick() {
       this.$router.push("/pet-name");
     },
},
}
</script>

<template>
<h1>Ola, humano.</h1>
<p>Preparado para mudar a alimentação e invertir na saúde do seu melhor amigo?</p>
<v-btn density="compact" icon="mdi-arrow-right-thin" size="x-large" @click="handleClick" variant="plain" location="bottom" position="fixed" class="mb-5"></v-btn>
</template>