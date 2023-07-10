<script setup>
import { onMounted } from "vue";
import { restStore } from "../store";
import RestList from "../components/RestList.vue";

onMounted(() => {
  restStore.getRestaurantes();
});
</script>
<template>
  <RestList />
</template>
