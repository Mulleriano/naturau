import { reactive } from "vue";
import { listaPedidos } from "../api";

export const pedidosStore = reactive({
  pedidos: [],
  async pegarPedidos() {
    const res = await listaPedidos();
    this.pedidos = res;
  },
});
