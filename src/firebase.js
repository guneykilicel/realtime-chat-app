
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAx3bMhhvvbbWdvVlMV4J8u7w5FsPAXMMw",
  authDomain: "chat-93305.firebaseapp.com",
  projectId: "chat-93305",
  storageBucket: "chat-93305.appspot.com",
  messagingSenderId: "812207428299",
  appId: "1:812207428299:web:86b23c59d5fde8c227014e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();