import { pedidosStore } from "../store";

export function converter() {
  const dataInteira = pedidosStore.pedido.inicio.toDate();

  const dia = dataInteira?.getDate();
  const mes = () => {
    const numero = dataInteira?.getMonth();
    const mesTexto = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    const txt = mesTexto[numero];
    return txt;
  };
  return dia + " " + mes();
}
