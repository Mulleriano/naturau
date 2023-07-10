import { reactive } from "vue";
import { list } from "../api";

export const restStore = reactive({
  restaurantes: [],
  async getRestaurantes() {
    const res = await list();
    this.restaurantes = res;
  },
});
