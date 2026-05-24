
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";


const Login = () => {
  const  signIn = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signIn(email, password)
        .then((result) => {
          const user =result.user;
          console.log(user)
        })
        .catch((error) => {
           const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage)
  });
        
        
    }
    return (
  
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Login now!</h1>

        <form onSubmit={handleLogin}>
            
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email"
          required />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password"
          required />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="font-semibold text-center">Don't Have An Account ? Please <Link className="text-secondary" to="/auth/signup">SignUp</Link></p>

        </form>

      </div>
    </div>
 

    );
};

export default Login;