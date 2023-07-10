import { db } from "@/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export async function list() {
  const querySnapshot = await getDocs(collection(db, "restaurantes"));

  let itensLocal = [];

  querySnapshot.forEach((doc) => {
    itensLocal.push({ ...doc.data(), id: doc.id });
  });
  return itensLocal;
}
