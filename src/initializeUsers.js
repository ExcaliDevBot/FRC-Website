import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

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

const users = {
  mentorUser: { username: "mentorUser", email: "mentor@example.com", password: "mentor123", role: "mentor" },
  captainUser: { username: "captainUser", email: "captain@example.com", password: "captain123", role: "captain" },
  teamLeadUser: { username: "teamLeadUser", email: "teamlead@example.com", password: "teamlead123", role: "team lead" },
  teamMemberUser: { username: "teamMemberUser", email: "teammember@example.com", password: "teammember123", role: "team member" },
};

const initializeUsers = async () => {
  const usersRef = ref(db, "users");
  await set(usersRef, users);
  console.log("Users initialized in Realtime Database.");
};

initializeUsers();