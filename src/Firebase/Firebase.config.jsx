// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2TIjUBF_hHqnbT4pgnd6-yah4FgTSPmI",
  authDomain: "pet-care-auth-services.firebaseapp.com",
  projectId: "pet-care-auth-services",
  storageBucket: "pet-care-auth-services.firebasestorage.app",
  messagingSenderId: "547132249778",
  appId: "1:547132249778:web:c6fd1d07453dc3283e5bab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app