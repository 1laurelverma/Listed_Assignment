// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQTZwY9YQK_Hv4yD1WE7iM24iv-bDGFzk",
  authDomain: "user-login-24baa.firebaseapp.com",
  projectId: "user-login-24baa",
  storageBucket: "user-login-24baa.appspot.com",
  messagingSenderId: "90148643669",
  appId: "1:90148643669:web:d0c3bace1b384f49bc85dc",
  measurementId: "G-QGYGTWL4JT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
