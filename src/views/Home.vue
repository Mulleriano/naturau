<script>
export default  {
    methods: {
    handleClick() {
       this.$router.push("/login");
     },
},
}

</script>

<template>
<body class="w-100 h-100">
  <v-btn density="compact" icon="mdi-arrow-right-thin" size="x-large" @click="handleClick" variant="plain" location="bottom" position="fixed" class="mb-5"></v-btn>
</body>

</template>

<!-- <template>
  <main class="w-100 h-100">
    <img src="/public/bg.jpg" class="w-auto h-auto overflow">
    <v-card location="bottom" position="fixed" class="mb-10 elevation-0" color="transparent" > 
    <v-btn density="compact" icon="mdi-arrow-right-thin" size="x-large" @click="handleClick" variant="plain"></v-btn>
    <v-btn @click="handleClick"  variant="plain"> Next </v-btn> 
    </v-card>
  </main>
</template> -->

<style>

body {
  background-image: url("public/bg.jpg");
}


</style>