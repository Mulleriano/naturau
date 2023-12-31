import { db } from "@/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { reactive } from "vue";
import { dadosPet } from "../api";

import { ref as vueRef } from "vue";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const storage = getStorage();
const uploadedImgUrl = vueRef("");

export const petStore = reactive({
  user: {},
  petDados: {},
  pegarUser() {
    onAuthStateChanged(getAuth(), async (user) => {
      this.user = user;
      const res = await dadosPet(user.uid);
      this.petDados = res;
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
    setDoc(
      usuarios,
      {
        tipo: payload.tipo,
        sexo: payload.sexo,
        sn: payload.sn,
        restricao: payload.restricao,
      },
      { merge: true }
    );
  },
});

export const imgStore = reactive({
  img: () => {
    onAuthStateChanged(getAuth(), (user) => {
      const email = user.email;
      const file = document.getElementById("image").files[0];
      const storageRef = ref(storage, email);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.error(error);
        },
        () =>
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            uploadedImgUrl.value = url;
            const uid = user.uid;
            const usuarios = doc(db, "usuarios", uid);
            setDoc(usuarios, { profilePicture: url }, { merge: true });
          })
      );
    });
  },
});