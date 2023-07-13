import { reactive } from "vue";
import { listaRestaurantes, listaComidas } from "../api";

export const restStore = reactive({
  restaurantes: [],
  async pegarRestaurantes() {
    const res = await listaRestaurantes();
    this.restaurantes = res;
  },
});

export const comidasStore = reactive({
  comidas: [],
  async pegarComidas(restId) {
    const res = await listaComidas(restId);
    this.comidas = res;
  },
});
