<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import { onMounted } from "vue";
import { petStore } from "../store";


const storage = getStorage();

onMounted(async () => {
  await petStore.pegarUser();
  await petStore.pegarDadosPet(this.user.uid);
});

const metadata = {
  size: Number,
  name: "",
};

const img = () => {
  onAuthStateChanged(getAuth(), (user) => {
    const email = user.email;
    const file = document.getElementById("image").files[0];
    const storageRef = ref(storage, email);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
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
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          uploadedImgUrl = url;
          console.log(url);
          const uid = user.uid;
          uploadedImgUrl = url;
          console.log(uid);
          const usuarios = doc(db, "usuarios", uid);
          setDoc(usuarios, { profilePicture: url }, { merge: true });
        });
      }
    );
  });
};


</script>

<template>
  {{ petStore.user.uid }}
 <v-container class="w-100 h-100 bg">
  <v-card
    position="relative"
    location="center"
    elevation="0"
    class="h-50 w-100 pa-5 d-flex flex-column justify-center"
  >
    <h1 class="text-teal-darken-4">Agora escolha sua melhor foto!</h1>
    <v-container class="w-100 h-50">
      <v-file-input
        label="Foto do pet mais lindo do mundo"
        variant="underlined"
        prepend-icon="mdi-camera"
        ref="file"
        id="image"
        @change="img()"
        type="file"
        clear-icon="w-100"
      ></v-file-input>

    </v-container>
    <!-- <v-btn @click="img()">Salvar Imagem </v-btn> -->
  </v-card>
  <v-btn
    size="large"
    @click="this.$router.push('/naturau')"
    rounded="xl"
    color="#053026"
    location="bottom"
    position="fixed"
    class="mb-16 text-white w-50"
    >Próximo</v-btn
  >
 </v-container>
</template>

<style>
.bg {
  background-image: url("public/imgs/bg-onda.png");
  background-size: 100%;
  background-position: top;
}
</style>