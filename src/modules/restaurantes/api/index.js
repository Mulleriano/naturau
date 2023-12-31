import { db } from "@/firebase.config";
import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export async function listaRestaurantes() {
  let itensLocal = [];
  const querySnapshot = await getDocs(collection(db, "restaurantes"));
  querySnapshot.forEach((doc) => {
    itensLocal.push({ ...doc.data(), id: doc.id });
  });
  return itensLocal;
}

export async function restDados(restId) {
  let restData = {};
  const restaurantes = await getDoc(doc(db, "restaurantes", restId));

  restData = restaurantes.data();
  return restData;
}

export async function listaComidas(restId) {
  let itensLocal = [];
  if (!restId) {
    const comidas = await getDocs(collectionGroup(db, "comidas"));
    comidas.forEach((doc) => {
      itensLocal.push({
        ...doc.data(),
        id: doc.id,
        restId: doc.ref.parent.parent.id,
      });
    });
  } else {
    const comidas = await getDocs(
      collection(db, "restaurantes", restId, "comidas")
    );

    comidas.forEach((doc) => {
      itensLocal.push({ ...doc.data(), id: doc.id, restId: restId });
    });
  }

  return itensLocal;
}
