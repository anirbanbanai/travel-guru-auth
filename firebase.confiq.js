// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw7-mYKLSkm4U5u1G4hJ-GDNFq2V1NKnU",
  authDomain: "travell-guru-a.firebaseapp.com",
  projectId: "travell-guru-a",
  storageBucket: "travell-guru-a.appspot.com",
  messagingSenderId: "979126268287",
  appId: "1:979126268287:web:2681f43002e0660f596a4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}