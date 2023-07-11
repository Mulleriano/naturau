import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCtS9wDwEqd-pqTCdFc46UfQHc3KhySG7U",
  authDomain: "naturau-4193e.firebaseapp.com",
  projectId: "naturau-4193e",
  storageBucket: "naturau-4193e.appspot.com",
  messagingSenderId: "300295212490",
  appId: "1:300295212490:web:0aff818c6a2674f4315333",
  measurementId: "G-4FVCD1ZL59",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
