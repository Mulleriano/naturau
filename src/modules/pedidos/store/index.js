import { reactive } from "vue";
import { finalizar, listaPedidos } from "../api";

export const pedidosStore = reactive({
  pedidos: [],
  pedido: {},
  loadingDetalhes: true,
  async pegarPedidos() {
    const res = await listaPedidos();
    this.pedidos = res;
  },
  async filtrarPedidos(id) {
    await this.pegarPedidos();
    this.pedidos.concluidos.map((pedido) => {
      if (pedido.id == id) this.pedido = pedido;
    });
    this.pedidos.emAndamento.map((pedido) => {
      if (pedido.id == id) this.pedido = pedido;
    });
    this.loadingDetalhes = false;
  },
  async atualizarStatus(pedidoId) {
    await finalizar(pedidoId);
  },
});
