import { reactive } from "vue";
import { lista } from "../api";

export const restStore = reactive({
  restaurantes: [],
  async pegarRestaurantes() {
    const res = await lista();
    this.restaurantes = res;
  },
});
