import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyCCp-qwLGq9MugKd0g3rzLJBiL2bRW-tmY",
  authDomain: "chat-app-11b84.firebaseapp.com",
  databaseURL:
    "https://chat-app-11b84-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-app-11b84",
  storageBucket: "chat-app-11b84.appspot.com",
  messagingSenderId: "561002742526",
  appId: "1:561002742526:web:1ea255108f7778f356dbaf",
  measurementId: "G-T5Y24K7FG6",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
