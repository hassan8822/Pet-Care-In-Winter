import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";


const AuthenticationLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <header>
                <Navbar></Navbar>
            </header>
            <main className="flex justify-center  mt-5">
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default AuthenticationLayout;