import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeO6G5lmJlf02XLYqtR7QFo7UZ0EjZXWk",
    authDomain: "allyvalley-83.firebaseapp.com",
    projectId: "allyvalley-83",
    storageBucket: "allyvalley-83.appspot.com",
    messagingSenderId: "647979977158",
    appId: "1:647979977158:web:daba522b78acc2298fcac7",
    measurementId: "G-5VRHLB3B5H"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);