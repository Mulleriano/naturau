import { db } from "@/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { reactive } from "vue";



export const petStore = reactive({
  user: {},
  petDados: {},
  async pegarUser() {
    await onAuthStateChanged(getAuth(), (user) => {
      this.user = user;
      return user;
    });
  },
  proximo(payload) {
    const usuario = setDoc(doc(db, "usuarios", this.user.uid), {
      petName: payload.petName,
      address: payload.address,
    }).catch((error) => {
      alert(error.message);
    });
  },
  fim(payload) {
    const usuarios = doc(db, "usuarios", this.user.uid);
    setDoc(usuarios, { tipo: payload.tipo, sexo: payload.sexo, sn: payload.sn, restricao: payload.restricao  }, { merge: true });
  },
  pegarDadosPet(user) {
    const usuarios =  doc(db, "usuarios", this.user.uid);
    const pet = getDoc(usuarios);
    const petDados = pet.data()
    return petDados;
  },
});