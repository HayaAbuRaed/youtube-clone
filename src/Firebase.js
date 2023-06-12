// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYDR3UEktUqYAd5zceDHzu4BMBrTvGdvs",
  authDomain: "clone-eb507.firebaseapp.com",
  projectId: "clone-eb507",
  storageBucket: "clone-eb507.appspot.com",
  messagingSenderId: "66075803020",
  appId: "1:66075803020:web:61d86fecdbb70aa011aaa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);