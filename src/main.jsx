import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AuthProvider from './Provider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
   <RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </StrictMode>,
)
