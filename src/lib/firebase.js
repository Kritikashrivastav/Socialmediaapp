import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-5035a.firebaseapp.com",

  projectId: "reactchat-5035a",

  storageBucket: "reactchat-5035a.appspot.com",

  messagingSenderId: "265996978265",

  appId: "1:265996978265:web:eb967a6180a7eff0838948"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()