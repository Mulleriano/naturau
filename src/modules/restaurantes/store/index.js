import { reactive } from "vue";
import { listaRestaurantes, restDados, listaComidas } from "../api";

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
});
