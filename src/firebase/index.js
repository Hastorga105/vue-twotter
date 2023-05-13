// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9bchkYA6QezhATC60vBduzlvzmUUmKnM",
  authDomain: "twotter-fe042.firebaseapp.com",
  projectId: "twotter-fe042",
  storageBucket: "twotter-fe042.appspot.com",
  messagingSenderId: "525872482980",
  appId: "1:525872482980:web:18f397792736e873373431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}