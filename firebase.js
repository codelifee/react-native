import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACZeHju5gWRs1TPGvhvuy1mdXO3jNtIhc",
    authDomain: "signal-clone-b7e78.firebaseapp.com",
    projectId: "signal-clone-b7e78",
    storageBucket: "signal-clone-b7e78.appspot.com",
    messagingSenderId: "497719639131",
    appId: "1:497719639131:web:ca3d6ff510dc0191d3537e",
    measurementId: "G-T6P876GQP2"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };