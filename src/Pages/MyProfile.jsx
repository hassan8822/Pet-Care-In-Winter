import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import userImage from "../assets/icons8-user-50.png"
import { useNavigate } from "react-router";

const MyProfile = () => {
    const {user} = use (AuthContext);
    const navigate = useNavigate()
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 shadow-xl p-6 w-96 text-center">
                <img className="w-24 h-24 rounded-full mx-auto" src={user ?.photoURL || userImage } alt="" />
                 <h2 className="text-xl font-bold mt-3">{user ?. displayName || "No Name"}</h2>
                      <p className="text-gray-500">{user?.email}</p>

                        <button onClick={() => navigate("/updateprofile")} className="btn btn-primary mt-4">
                         Update Profile</button>

            </div>
           
            
        </div>
    );
};

export default MyProfile;