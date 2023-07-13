import { reactive } from "vue";
import { listaPedidos } from "../api";

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
    this.pedidos.concluidos.map((a) => {
      if (a.id == id) this.pedido = a;
    });
    this.pedidos.emAndamento.map((a) => {
      if (a.id == id) this.pedido = a;
    });
    this.loadingDetalhes = false;
  },
});
