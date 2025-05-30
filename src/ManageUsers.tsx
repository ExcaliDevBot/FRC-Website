
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update, remove } from "firebase/database";

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

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState({});
  const [newUser, setNewUser] = useState({ username: "", email: "", password: "", role: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      const usersRef = ref(db, "users");
      const snapshot = await get(usersRef);

      if (snapshot.exists()) {
        setUsers(snapshot.val());
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    const userRef = ref(db, `users/${newUser.username}`);
    await set(userRef, newUser);
    setUsers((prev) => ({ ...prev, [newUser.username]: newUser }));
    setNewUser({ username: "", email: "", password: "", role: "" });
  };

  const handleEditUser = async (username: string, updatedData: any) => {
    const userRef = ref(db, `users/${username}`);
    await update(userRef, updatedData);
    setUsers((prev) => ({ ...prev, [username]: { ...prev[username], ...updatedData } }));
  };

  const handleDeleteUser = async (username: string) => {
    const userRef = ref(db, `users/${username}`);
    await remove(userRef);
    setUsers((prev) => {
      const updatedUsers = { ...prev };
      delete updatedUsers[username];
      return updatedUsers;
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New User</h3>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          className="block mb-2 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="block mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          className="block mb-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="block mb-2 p-2 border rounded"
        />
        <button onClick={handleAddUser} className="bg-green-500 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Existing Users</h3>
        <ul>
          {Object.entries(users).map(([username, userData]: any) => (
            <li key={username} className="mb-4">
              <p>
                <strong>Username:</strong> {username}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Role:</strong> {userData.role}
              </p>
              <button
                onClick={() => handleEditUser(username, { role: "updatedRole" })}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteUser(username)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageUsers;