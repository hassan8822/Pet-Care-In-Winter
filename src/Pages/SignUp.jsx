import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {
    const {createUser, setUser} = use(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,photo,email,password);
        createUser(email,password)
        .then( result => {
            const user = result.user;
            // console.log(user)
            setUser(user);
        })
        .catch(error => {
              const errorCode = error.code;
    const errorMessage = error.message;
            alert(errorMessage)
        })
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

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password"
          required />

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