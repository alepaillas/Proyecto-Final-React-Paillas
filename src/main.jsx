import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBd9gzaXXlT6O57A8HEMASMIfdRQJP_FHw",
  authDomain: "galeria-anfisbena.firebaseapp.com",
  projectId: "galeria-anfisbena",
  storageBucket: "galeria-anfisbena.appspot.com",
  messagingSenderId: "641684763063",
  appId: "1:641684763063:web:1ff28cda5b5597cb2db832",
  measurementId: "G-X8T8DHD4KH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
