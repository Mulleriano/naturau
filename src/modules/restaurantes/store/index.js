import { reactive } from "vue";
import { listaRestaurantes, restDados, listaComidas } from "../api";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase.config";
import { pedidosStore } from "@/modules/pedidos/store";

export const restStore = reactive({
  restaurantes: [],
  restaurante: {},
  async pegarRestaurantes() {
    const res = await listaRestaurantes();
    this.restaurantes = res;
  },
  async pegarDadosRest(restId) {
    const res = await restDados(restId);
    this.restaurante = res;
  },
});

export const comidasStore = reactive({
  comidas: [],
  comida: {},
  async pegarComidas(restId) {
    const res = await listaComidas(restId);
    this.comidas = res;
  },
  async filtrarComida(restId, comidaId) {
    await this.pegarComidas(restId);
    this.comidas.map((comida) => {
      if (comidaId == comida.id) this.comida = comida;
    });
  },
  async adicionarPedido() {
    await pedidosStore.pegarPedidos();
    let numeroPedidos = pedidosStore.pedidos.emAndamento.length;
    const horario = new Date();
    const pedido = {
      comidaId: this.comida.id,
      inicio: horario,
      status: "em andamento",
      titulo: `Pedido #${numeroPedidos == 0 ? 1 : numeroPedidos + 1}`,
      total: this.comida.preco,
    };
    const res = await addDoc(collection(db, "pedidos"), pedido);
    return res;
  },
});
