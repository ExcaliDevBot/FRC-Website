import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getDatabase, ref, get} from "firebase/database";

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

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("Starting login process...");
            console.log(`Username entered: ${username}`);
            console.log(`Password entered: ${password}`);

            const userRef = ref(db, `users/${username}`);
            const snapshot = await get(userRef);

            if (!snapshot.exists()) {
                console.error("No user found with the given username.");
                setError("Invalid username or password.");
                return;
            }

            const userData = snapshot.val();
            console.log("User data retrieved from Realtime Database:", userData);

            if (userData.password !== password) {
                console.error("Incorrect password.");
                setError("Invalid username or password.");
                return;
            }
            localStorage.setItem("username", username);

            console.log(`Logged in as ${userData.role}`);
            navigate("/dashboard");
        } catch (err) {
            console.error("Error during login:", err);
            setError("Invalid username or password.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-team-blue text-white py-2 rounded-lg hover:bg-opacity-90 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;