import { db } from "@/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { reactive } from "vue";


 export const petStore = reactive({
 proximo: (payload) => {
    onAuthStateChanged(getAuth(), (user) => {
       const uid = user.uid
     const usuario = setDoc(doc(db, "usuarios", uid),{
      payload
     }).catch((error)  => {
         console.log(error.code);
         alert(error.message);
     })
    })},
  fim: (payload) => {
    onAuthStateChanged(getAuth(), (user) => {
      const uid = user.uid
    const usuarios = doc(db, "usuarios", uid);
    setDoc(usuarios,  { payload} , { merge: true })})},
  
    });