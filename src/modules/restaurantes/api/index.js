import { db } from "@/firebase.config";
import { collection, collectionGroup, getDocs } from "firebase/firestore";

export async function listaRestaurantes() {
  const querySnapshot = await getDocs(collection(db, "restaurantes"));

  let itensLocal = [];

  querySnapshot.forEach((doc) => {
    itensLocal.push({ ...doc.data(), id: doc.id });
  });
  return itensLocal;
}

export async function listaComidas(restId) {
  let itensLocal = [];
  if (!restId) {
    const restaurantes = await getDocs(collectionGroup(db, "comidas"));

    restaurantes.forEach((doc) => {
      itensLocal.push({ ...doc.data(), id: doc.id });
    });
  } else {
    const restaurante = await getDocs(
      collection(db, "restaurantes", restId, "comidas")
    );

    restaurante.forEach((doc) => {
      itensLocal.push({ ...doc.data(), id: doc.id });
    });
  }

  return itensLocal;
}
