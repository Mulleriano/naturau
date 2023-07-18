import { db } from "@/firebase.config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

export async function listaPedidos(uid) {
  let pedidos = [];

  const queryPedidos = await getDocs(
    query(collection(db, "pedidos"), where("uid", "==", uid))
  );

  queryPedidos.forEach((doc) => {
    pedidos.push({ ...doc.data(), id: doc.id, uid: doc.uid });
  });
  return pedidos;
}

export async function pedidoData(pedidoId) {
  let pedidoData = {};
  const pedido = await getDoc(doc(db, "pedidos", pedidoId));

  pedidoData = pedido.data();

  return pedidoData;
}

export async function finalizar(pedidoId) {
  const res = await updateDoc(doc(db, "pedidos", pedidoId), {
    status: "concluido",
  });
}

export async function adicionar(pedido) {
  const res = await addDoc(collection(db, "pedidos"), pedido);
  return res;
}
