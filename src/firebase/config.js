// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeXHNqf4MEQCPf9liLzakfeZLJBFDQ13Y",
  authDomain: "bikemarket-b1340.firebaseapp.com",
  projectId: "bikemarket-b1340",
  storageBucket: "bikemarket-b1340.appspot.com",
  messagingSenderId: "978576655939",
  appId: "1:978576655939:web:8a9c1a6293228cf5d3f6f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

