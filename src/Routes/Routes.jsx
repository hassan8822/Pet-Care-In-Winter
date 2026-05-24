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
import UpdateProfile from "../Pages/UpdateProfile";
import Loading from "../Pages/Loading";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element:<Home></Home>,
         loader: () => fetch("/pet.json"),
         hydrateFallbackElement:<Loading></Loading>

      },
      {
        path:"/services",
        element:<Services></Services>,
         loader: () => fetch("/pet.json"),
         hydrateFallbackElement:<Loading></Loading>

      },
      {
        path:"/myprofile",
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },

      {
        path:"/updateprofile",
        element:<PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path:"/pet/:id",
        element:<PrivateRoute>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>,
        loader: () => fetch("/pet.json"),
        hydrateFallbackElement:<Loading></Loading>

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