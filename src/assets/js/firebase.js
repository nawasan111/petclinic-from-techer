// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5foTX_74VeWwhIVxLB3o8TFR8AUDxLdU",
  authDomain: "petclinic-2f16d.firebaseapp.com",
  projectId: "petclinic-2f16d",
  storageBucket: "petclinic-2f16d.appspot.com",
  messagingSenderId: "65562929527",
  appId: "1:65562929527:web:0ac02afc6895cf8e4a9972",
  measurementId: "G-E9CVP8Z6WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };