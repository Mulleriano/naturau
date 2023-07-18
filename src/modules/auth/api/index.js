import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export async function dadosPet(uid) {
  const docRef = doc(db, "usuarios", uid);
  const user = await getDoc(docRef);
  return user.data();
}
