// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGNZa2yCTlMcqVFF4F44AXn7w92TZ_eFA",
  authDomain: "excaliwebsite.firebaseapp.com",
  projectId: "excaliwebsite",
  storageBucket: "excaliwebsite.firebasestorage.app",
  messagingSenderId: "863902923874",
  appId: "1:863902923874:web:eb7d50864ff87ee86c653b",
  measurementId: "G-6LPQ8Q56LB"
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db };