import React from 'react';
import ReactDOM from 'react-dom/client';
import ExpensesListPage from './pages/expensesListPage/expensesListPage';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddExpensePage from './pages/addExpensePage/addExpensePage';
import LoginPage from './pages/loginPage/loginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExpensesListPage />
  },
  {
    path: "/addExpense",
    element: <AddExpensePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyA1Ffha7B1vVWVqorhIVFVfhKECpvlMKxk",
//   authDomain: "expenses-8c745.firebaseapp.com",
//   projectId: "expenses-8c745",
//   storageBucket: "expenses-8c745.appspot.com",
//   messagingSenderId: "513889353253",
//   appId: "1:513889353253:web:86728a63be6392a4ab09cc",
//   measurementId: "G-D15DT6W2QC"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // eslint-disable-line no-unused-vars

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
