import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import ServiceDetails from "../Pages/ServiceDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element:<Home></Home>,
         loader: () => fetch("/pet.json")

      },
      {
        path:"/services",
        element:<Services></Services>

      },
      {
        path:"/myprofile",
        element: <MyProfile></MyProfile>
      },
      {
        path:"/pet/:id",
        element:<PrivateRoute>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>,
        loader: () => fetch("/pet.json")

      }
    ]
    
  },
  {
   path:"/auth",
   element: <AuthenticationLayout></AuthenticationLayout>,
   children:[
    {
      path:"/auth/login",
      element:<Login></Login>
    },
    {
      path:"/auth/signup",
      element:<SignUp></SignUp>
    }
   ]
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);