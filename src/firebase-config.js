import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAB0aFPbnRyv9SaYUKwSKyShb0YtDlbKP0",
    authDomain: "authentication-96c3a.firebaseapp.com",
    projectId: "authentication-96c3a",
    storageBucket: "authentication-96c3a.appspot.com",
    messagingSenderId: "118877539521",
    appId: "1:118877539521:web:cce127aee29d8ac8365840",
    measurementId: "G-BDLXWBPBW8"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  const db = getFirestore();
  export default db;