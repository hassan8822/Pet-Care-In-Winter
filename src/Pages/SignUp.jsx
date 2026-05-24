import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const {createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [showpassword, setShowpassword] = useState(false);
   
      const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

    const handleSignUp = (e) => {
        e.preventDefault();

        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,photo,email,password);

          if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters and include uppercase, lowercase & special character."
      );
      return;
    }
    setError("");

        createUser(email,password)
        .then( result => {
            const user = result.user;
            // console.log(user)
             updateUser({ displayName :name, photoURL: photo})
             .then(() => {
                  setUser({...user ,displayName :name ,photoURL: photo });
                  navigate("/")

             })
             .catch((error) => {
                console.log(error);
                setUser(user)
             })
          
        })
        .catch(error => {
            //   const errorCode = error.code;
    const errorMessage = error.message;
            alert(errorMessage)
        })
    }
     const handlePassword = (e) => {
        e.preventDefault;
        setShowpassword(!showpassword)
     }
    return (
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Register Your Account!</h1>

        <form onSubmit={handleSignUp}>
            
        <fieldset className="fieldset">
            {/* Name */}
          <label className="label">Name</label>
          <input type="name" name="name" className="input" placeholder="Name"
          required />
          {/* photoUrl */}
          <label className="label">Photo</label>
          <input type="Photo" name="photo" className="input" placeholder="PhotoURL"
          required />
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email"
          required />

         <div className="relative">
             <label className="label">Password</label>
          <input type={showpassword ? "text" : "password"} name="password" className="input" placeholder="Password"
          required />
          <button onClick={handlePassword} className="btn btn-xs absolute top-6 right-5">
           {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>  } </button>
         </div>

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className="font-semibold text-center">You Have An Account ? Please <Link className="text-primary" to="/auth/login">Login</Link></p>

        </form>

      </div>
    </div>
    );
};

export default SignUp;