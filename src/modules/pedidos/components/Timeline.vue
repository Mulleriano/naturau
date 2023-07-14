<script setup>
import { onMounted, reactive } from "vue";

const status = reactive({
  pagamento: false,
  preparo: false,
  saiu: false,
  entregue: false,
  done: false,
});

function handleStatus() {
  setTimeout(() => {
    status.pagamento = true;
  }, 1000);

  setTimeout(() => {
    status.preparo = true;
  }, 2000);

  setTimeout(() => {
    status.saiu = true;
  }, 3000);

  setTimeout(() => {
    status.entregue = true;
    status.done = true;
  }, 4000);
}

function statusClass(value) {
  return value ? "text-green-darken-4" : "text-grey";
}

function dotColor(value) {
  return value ? "green-darken-4" : "grey";
}

onMounted(() => {
  handleStatus();
});
</script>

<template>
  <v-sheet align="center" class="elevation-0">
    <v-progress-linear
      color="#fe8b05"
      style="
        position: relative;
        left: -170px;
        width: 150%;
        transform: rotate(90deg);
      "
      v-if="!status.done"
      indeterminate
    ></v-progress-linear>
    <v-timeline line-color="#fe8b05" side="end">
      <v-timeline-item :dot-color="dotColor(status.pagamento)">
        <span :class="['font-weight-bold', statusClass(status.pagamento)]">
          Pagamento recebido
        </span>
      </v-timeline-item>
      <v-timeline-item :dot-color="dotColor(status.preparo)">
        <span :class="['font-weight-bold', statusClass(status.preparo)]">
          Pedido sendo feito
        </span>
      </v-timeline-item>
      <v-timeline-item :dot-color="dotColor(status.saiu)">
        <span :class="['font-weight-bold', statusClass(status.saiu)]">
          Saiu para entrega
        </span>
      </v-timeline-item>
      <v-timeline-item :dot-color="dotColor(status.entregue)">
        <span :class="['font-weight-bold', statusClass(status.entregue)]">
          Pedido entregue
        </span>
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>
