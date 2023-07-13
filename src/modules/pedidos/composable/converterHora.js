import { pedidosStore } from "../store";

export async function converter() {
  const dataInteira = await pedidosStore.pedido.inicio.toDate();

  const dia = dataInteira?.getDate();
  const mes = () => {
    let numero = dataInteira?.getMonth();
    let txt = "";
    switch (numero) {
      case 1:
        txt = "Jan";
        break;
      case 2:
        txt = "Fev";
        break;
      case 3:
        txt = "Mar";
        break;
      case 4:
        txt = "Abr";
        break;
      case 5:
        txt = "Mai";
        break;
      case 6:
        txt = "Jun";
        break;
      case 7:
        txt = "Jul";
        break;
      case 8:
        txt = "Ago";
      case 9:
        txt = "Set";
        break;
      case 10:
        txt = "Out";
      case 11:
        txt = "Nov";
      case 12:
        txt = "Dez";
    }
    return txt;
  };
  return dia + mes();
}
