import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMDJr99Ok1n-FIgW0au-XH_CS44tp1hN8",
  authDomain: "writenode-d416f.firebaseapp.com",
  projectId: "writenode-d416f",
  storageBucket: "writenode-d416f.appspot.com",
  messagingSenderId: "587862310304",
  appId: "1:587862310304:web:c793926999f56ccd5778c5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();