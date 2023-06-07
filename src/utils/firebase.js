import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtCIRWxNWz8716-Jmctq-E1apP3yOqyOo",
    authDomain: "advaana-c5e5d.firebaseapp.com",
    databaseURL: "https://advaana-c5e5d-default-rtdb.firebaseio.com",
    projectId: "advaana-c5e5d",
    storageBucket: "advaana-c5e5d.appspot.com",
    messagingSenderId: "433334082606",
    appId: "1:433334082606:web:d80493724ecfdee65a13bf"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

