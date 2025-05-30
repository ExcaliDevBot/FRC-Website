import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import ManageUsers from "./ManageUsers";

const firebaseConfig = {
  apiKey: "AIzaSyAGNZa2yCTlMcqVFF4F44AXn7w92TZ_eFA",
  authDomain: "excaliwebsite.firebaseapp.com",
  databaseURL: "https://excaliwebsite-default-rtdb.firebaseio.com",
  projectId: "excaliwebsite",
  storageBucket: "excaliwebsite.firebasestorage.app",
  messagingSenderId: "863902923874",
  appId: "1:863902923874:web:eb7d50864ff87ee86c653b",
  measurementId: "G-6LPQ8Q56LB"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Dashboard: React.FC = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchUserRole = async () => {
      const username = localStorage.getItem("username"); // Assuming username is stored in localStorage
      console.log("Retrieved username from localStorage:", username);

      if (!username) {
        console.error("Username not found in localStorage.");
        return;
      }

      const userRef = ref(db, `users/${username}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log("User data retrieved:", userData);
        setRole(userData.role);
      } else {
        console.error("User not found in Realtime Database.");
      }
    };

    fetchUserRole();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold text-center py-6">Dashboard</h1>
      {role === "captain" ? (
        <ManageUsers />
      ) : (
        <p className="text-center mt-4">You do not have access to manage users.</p>
      )}
    </div>
  );
};

export default Dashboard;