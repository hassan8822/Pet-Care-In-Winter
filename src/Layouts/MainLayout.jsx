import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Pages/Loading";


const MainLayout = () => {
    const {state}  = useNavigation();
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            {import.meta.env.VITE_name}
            <main className="flex-1">
               {state == "loading"? <Loading/> : <Outlet></Outlet> }  

            </main>
           
            <Footer></Footer>
            
            
        </div>
    );
};

export default MainLayout;