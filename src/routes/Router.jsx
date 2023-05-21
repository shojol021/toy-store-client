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
import Blog from "../pages/blog/Blog";
import AddAToys from "../pages/add-toy/AddAToys";
import MyToys from "../pages/my toys/MyToys";
import ErrorPage from "./Error";
import AboutUs from "../pages/about-us/AboutUs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
          loader: ({params}) => fetch(`https://toy-store-server-shojol021.vercel.app/toys/${params.id}`)
        },
        {
          path: '/all-toys',
          element: <AllToys></AllToys>,
          loader: () => fetch('https://toy-store-server-shojol021.vercel.app/toys')
        },
        {
          path: '/add-toy',
          element: <AddAToys></AddAToys>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/my-toys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/about-us',
          element: <AboutUs></AboutUs>
        }
      ]
    },
  ]);

export default router;