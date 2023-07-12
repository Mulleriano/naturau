import { db } from "@/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function listaPedidos() {
  const emAndamento = query(
    collection(db, "pedidos"),
    where("status", "==", "em andamento")
  );

  const concluidos = query(
    collection(db, "pedidos"),
    where("status", "==", "concluido")
  );

  let itensLocal = {
    concluidos: [],
    emAndamento: [],
  };

  const queryEmAndamento = await getDocs(emAndamento);

  const queryConcluidos = await getDocs(concluidos);

  queryEmAndamento.forEach((doc) => {
    itensLocal.emAndamento.push({ ...doc.data(), id: doc.id });
  });

  queryConcluidos.forEach((doc) => {
    itensLocal.concluidos.push({ ...doc.data(), id: doc.id });
  });
  return itensLocal;
}
