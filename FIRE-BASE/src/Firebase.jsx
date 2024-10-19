import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhDMgXO93XUmOAoAusYhNskHgC9Im5U8s",
    authDomain: "fir-education-eefc2.firebaseapp.com",
    projectId: "fir-education-eefc2",
    storageBucket: "fir-education-eefc2.appspot.com",
    messagingSenderId: "926616858249",
    appId: "1:926616858249:web:948963e0e45477cac8a058",
    measurementId: "G-D2Z8BZWFVL"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);