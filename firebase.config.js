// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4o6Dmksqz_oaC6694IQUTOOud1OiYz1M",
  authDomain: "fir-study-7c7d9.firebaseapp.com",
  projectId: "fir-study-7c7d9",
  storageBucket: "fir-study-7c7d9.appspot.com",
  messagingSenderId: "195415675009",
  appId: "1:195415675009:web:a35d4f65f7d5b7482cbd80",
  measurementId: "G-2YYN8HN9FQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
