import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App.jsx'
import UserLayout from './components/layouts/user_layout';
import Home from './components/pages/home';
import Admin from './components/admin/admin.jsx';
import ChartsOverviewDemo from './components/admin/dashboard.jsx';
import DataGridDemo from './components/admin/user.jsx';
import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Income from './components/pages/income.jsx';
import AddIncome from './components/pages/add-income.jsx';
import AddExpense from './components/pages/add-expense.jsx';
import Expense from './components/pages/expense.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "expense",
        element: <Expense />
      },
      {
        path: "add-expense",
        element: <AddExpense />
      },
      {
        path: "income",
        element: <Income />
      },
      {
        path: "add-income",
        element: <AddIncome />
      }
    ]
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "dashboard",
        element: <ChartsOverviewDemo />
      },
      {
        path: "user",
        element: <DataGridDemo />
      },
      {
        path: "products",
        element: <h2>Product Management</h2>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
)
