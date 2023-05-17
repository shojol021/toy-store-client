import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Register from "../pages/login-register/Register";
import Login from "../pages/login-register/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

export default router;