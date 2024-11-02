import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA02Y2xO7k4siSDNPVVbo1WRY73r34BwUM",
  authDomain: "fir-sd-a253e.firebaseapp.com",
  projectId: "fir-sd-a253e",
  storageBucket: "fir-sd-a253e.firebasestorage.app",
  messagingSenderId: "656732113673",
  appId: "1:656732113673:web:2a3f07d28c936e14ffa1d8",
  measurementId: "G-FDSMT8SXLM",
  databaseURL: "https://fir-sd-a253e-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
