import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsuHM4kg-a_-C2MAFi5jDqESYmerkixPM",
  authDomain: "efafa-76f78.firebaseapp.com",
  projectId: "efafa-76f78",
  storageBucket: "efafa-76f78.appspot.com",
  messagingSenderId: "531595414787",
  appId: "1:531595414787:web:1c2fd4b5c95a1719766d36",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
