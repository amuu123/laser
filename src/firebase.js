// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5eMFDsmwoiO6NYDPiQcoovibGfqikTBI",
  authDomain: "laser-eb7a0.firebaseapp.com",
  projectId: "laser-eb7a0",
  storageBucket: "laser-eb7a0.firebasestorage.app",
  messagingSenderId: "718953000291",
  appId: "1:718953000291:web:5bee1cd910cae33ca7b756",
  measurementId: "G-JD9NV0R85D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;