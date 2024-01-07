import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDGxG71tg-hSIjWpXTc2KahvrDFUf6t-L0",
    authDomain: "art-line-a9d6f.firebaseapp.com",
    projectId: "art-line-a9d6f",
    storageBucket: "art-line-a9d6f.appspot.com",
    messagingSenderId: "923911518880",
    appId: "1:923911518880:web:a50f6e8eb99936feea27c5"
};

export const app = initializeApp(firebaseConfig);