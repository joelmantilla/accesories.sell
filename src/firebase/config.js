// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATHrVfZCY92_FnX6ySuvTSsW0wnO21ODA",
  authDomain: "sell-accesories.firebaseapp.com",
  projectId: "sell-accesories",
  storageBucket: "sell-accesories.appspot.com",
  messagingSenderId: "414143581011",
  appId: "1:414143581011:web:478eaa871f4be5c7a42fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFiretoreApp = () => {
    return app 
}