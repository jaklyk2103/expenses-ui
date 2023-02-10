import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1Ffha7B1vVWVqorhIVFVfhKECpvlMKxk",
  authDomain: "expenses-8c745.firebaseapp.com",
  projectId: "expenses-8c745",
  storageBucket: "expenses-8c745.appspot.com",
  messagingSenderId: "513889353253",
  appId: "1:513889353253:web:86728a63be6392a4ab09cc",
  measurementId: "G-D15DT6W2QC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // eslint-disable-line no-unused-vars

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
