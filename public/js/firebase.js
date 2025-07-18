
  // js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCmc-WUeblfZNjPhZHNb88JBsPHOMlobAQ",
    authDomain: "inventario-data.firebaseapp.com",
    projectId: "inventario-data",
    storageBucket: "inventario-data.firebasestorage.app",
    messagingSenderId: "137792657309",
    appId: "1:137792657309:web:9ec242710f9887c5b04174",
    measurementId: "G-JK8XYQTHT0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { app, auth, db, provider };