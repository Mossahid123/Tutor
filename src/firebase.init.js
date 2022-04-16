// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6VxQrvYWglT9tbEt8jsOzaZbEOqn29J0",
  authDomain: "assingment-10-94ea7.firebaseapp.com",
  projectId: "assingment-10-94ea7",
  storageBucket: "assingment-10-94ea7.appspot.com",
  messagingSenderId: "207729910654",
  appId: "1:207729910654:web:cfa2722c009b0accd8892f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;