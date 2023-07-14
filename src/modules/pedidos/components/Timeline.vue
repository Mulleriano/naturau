<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { pedidosStore } from "../store";

const route = useRoute();
const pedidoId = route.params.id;

let status = reactive({
  pagamento: false,
  preparo: false,
  saiu: false,
  entregue: false,
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
    pedidosStore.atualizarStatus(pedidoId);
  }, 4000);
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
      v-if="!status.entregue"
      indeterminate
    ></v-progress-linear>
    <v-timeline line-color="#fe8b05" side="end">
      <v-timeline-item
        :dot-color="status.pagamento ? 'green-darken-4' : 'grey'"
      >
        <span
          :class="[
            'font-weight-bold',
            status.pagamento ? 'text-green-darken-4' : 'text-grey',
          ]"
        >
          Pagamento recebido
        </span>
      </v-timeline-item>
      <v-timeline-item :dot-color="status.preparo ? 'green-darken-4' : 'grey'">
        <span
          :class="[
            'font-weight-bold',
            status.preparo ? 'text-green-darken-4' : 'text-grey',
          ]"
        >
          Pedido sendo feito
        </span>
      </v-timeline-item>
      <v-timeline-item :dot-color="status.saiu ? 'green-darken-4' : 'grey'">
        <span
          :class="[
            'font-weight-bold',
            status.saiu ? 'text-green-darken-4' : 'text-grey',
          ]"
        >
          Saiu para entrega
        </span>
      </v-timeline-item>
      <v-timeline-item :dot-color="status.entregue ? 'green-darken-4' : 'grey'">
        <span
          :class="[
            'font-weight-bold',
            status.entregue ? 'text-green-darken-4' : 'text-grey',
          ]"
        >
          Pedido entregue
        </span>
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>
