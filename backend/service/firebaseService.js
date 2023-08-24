import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6mlhag6h3lgCbfmCdVgJwTwUhyqsTRN8",
    authDomain: "teamwallet700.firebaseapp.com",
    projectId: "teamwallet700",
    storageBucket: "teamwallet700.appspot.com",
    messagingSenderId: "203401155043",
    appId: "1:203401155043:web:50fbe42d24462750c810d6",
    measurementId: "G-DEK0ELVGHE"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

// Path: backend\service\firebaseService.js