import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
