
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider,  signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQGqXT97JfztsKJjhNeIhSGrQ3i7LDa8A",
  authDomain: "login-brk.firebaseapp.com",
  projectId: "login-brk",
  storageBucket: "login-brk.firebasestorage.app",
  messagingSenderId: "140150664505",
  appId: "1:140150664505:web:1b25ddc570cc2746e60ce8",
  measurementId: "G-M9N53EJCNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Provedor Google

const googleProvider = new GoogleAuthProvider();

// function login popup

async function signInWithGooglePopup() {
  try{
  
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;

  }catch(error)
  {
    throw error;
  
  }
}

// funtion para deslogar

async function logout() {
  await signOut(auth)
}

export { auth, googleProvider, signInWithGooglePopup,logout }