import { Link, NavLink } from "react-router"
import petlogo from "../assets/petLogo.png"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import userImage from "../assets/icons8-user-50.png"

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    console.log( "user try")
    signOutUser()
    .then(() => {
      alert("you logged out succesfully")
    })
    .catch((error) => {
      console.log(error)

    })
  }
   const links = <>  
 <NavLink to="/" className={({isActive}) => isActive
            ? "text-[#632EE3] font-bold"
            : "hover:text-[#632EE3]"
        }
      ><li className="m-2">Home</li>
      </NavLink>
  <NavLink to ="/services" className={({isActive}) =>isActive ?  "font-bold text-[#632EE3]" : "hover:text-[#632EE3]"}><li className="m-2 ">Services</li></NavLink>
   <NavLink to ="/myprofile" className={({isActive}) =>isActive ? " font-bold   text-[#632EE3]" : "hover:text-[#632EE3]"}><li className="m-2 ">MyProfile</li></NavLink>
   </>
 
    return (
     <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
    <Link to="/">
    <img  className="w-14 h-14 rounded-full object-cover" src={petlogo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>

  <div className="navbar-end">
    {user ? (
      <>
        <div className="tooltip tooltip-bottom"
          data-tip = {user ?. displayName || "user"}>
         

          <img className="w-10 h-10 rounded-full object-cover border"
           src={`${user ? user.photoURL : userImage}`} alt="" />
        </div>

        <button onClick={handleLogout} className="btn btn-primary px-10">Logout</button>
      </>
    ) : (
       <div className="flex gap-2">
    <Link to="/auth/login" className="btn btn-primary">
      Login
    </Link>

    <Link to="/auth/signup" className="btn btn-outline btn-primary">
      Register
    </Link>
  </div>
    )}
  </div>
   
  </div>

    );
};

export default Navbar;