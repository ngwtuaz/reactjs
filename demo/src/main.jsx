import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

import App from './App.jsx'
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import UserLayout from './components/user_layout.jsx';
import Cv from './components/cv/cv.jsx';
import Lab3b1 from './components/lab3/lab3b1.jsx';
import Lab3b2 from './components/lab3/lab3b2.jsx';
import TodoLab2 from './components/listTodo/todoLab2.jsx';
import Lab5 from './components/lab5/lab5.jsx';
import Add from './components/lab5/add.jsx';
import Lab5Api from './components/lab5/data.jsx';
import Login from './components/login.jsx';

// import './demo_redux.js'

function checkToken() {
  let token = localStorage.getItem("access_token");
  if(token){
    return redirect("/");
  } else {
    return null;
  }
}

const routers = createBrowserRouter([
  {
    path: "/cv",
    element: <Cv />
  },
  {
    path: "/lab2",
    element: <TodoLab2 />
  }
  ,
  {
    path: "/lab3b1",
    element: <Lab3b1 />
  },
  {
    path: "/lab3b2",
    element: <Lab3b2 />
  },
  {
    path: "/lab5",
    element: <Lab5 />,
    children: [
      {
        path: "create",
        element: <Add />
      },
      {
        path: "get",
        element: <Lab5Api/>,
      },
    ]
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        loader:checkToken,
        element: <Login />
      }
    ]
  },
  // {
  //   path: "/admin",
  //   element: <Admin/>,
  //   children: [
  //     {
  //       path: "",
  //       element: <h1>Dashboard</h1>
  //     },
  //     {
  //       path: "/user",
  //       element: <h1>User Management</h1>
  //     },
  //     {
  //       path: "/product",
  //       element: <h1>Product Management</h1>
  //     }
  //   ]
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>,
  // <App />
  <RouterProvider router={routers} />
)
