import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Register from "../pages/login-register/Register";
import Login from "../pages/login-register/Login";
import Home from "../pages/home/Home";
import ViewDetails from "../pages/view-details/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/all toys/AllToys";
import AddAToys from "../pages/home/add-toy/AddAToys";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/toys/${params.id}`)
        },
        {
          path: '/all-toys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:3000/toys')
        },
        {
          path: '/add-toy',
          element: <AddAToys></AddAToys>
        }
      ]
    },
  ]);

export default router;