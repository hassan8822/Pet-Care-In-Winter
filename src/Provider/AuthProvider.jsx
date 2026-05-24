import {  createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";


   export const AuthContext = createContext();
   import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

   const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   console.log(user, loading);



   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
      
   };
   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
   }

   const signInWithGoogle = () => {
   return signInWithPopup(auth, googleProvider);
}
 const updateUser = ( updatedData) => {
   return updateProfile(auth.currentUser , updatedData)
 }

   const signOutUser = () => {
      return signOut(auth);
   }
   useEffect (() => {
     const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false)

      });
      return () => {
         unsubscribe();

      };
   },[])
   const authData = {
    user,
    setUser,
    createUser,signOutUser,
    signIn,loading,
    setLoading,
    updateUser,
    signInWithGoogle 
   }
    return (
       
            <AuthContext value={authData}>{children}</AuthContext>
       
    );
};

export default AuthProvider;