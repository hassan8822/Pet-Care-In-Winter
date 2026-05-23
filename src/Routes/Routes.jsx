import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import ServiceDetails from "../Pages/ServiceDetails";
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
        element:<ServiceDetails></ServiceDetails>,
        loader: () => fetch("/pet.json")

      }
    ]
    
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);