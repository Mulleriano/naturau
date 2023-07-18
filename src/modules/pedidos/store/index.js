import { reactive } from "vue";
import { finalizar, listaPedidos, pedidoData } from "../api";

export const pedidosStore = reactive({
  pedidos: [],
  pedido: {},
  loadingDetalhes: true,
  async pegarPedidos() {
    const res = await listaPedidos();
    this.pedidos = res;
  },
  async pegarPedido(id) {
    const res = await pedidoData(id);
    this.pedido = res;
    this.loadingDetalhes = false;
  },
  async atualizarStatus(pedidoId) {
    await finalizar(pedidoId);
  },
});
