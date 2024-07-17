// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiZ21sL7Ubz-FVBWMR-WHQoM2PeC4AjUg",
  authDomain: "clock-app-72e95.firebaseapp.com",
  projectId: "clock-app-72e95",
  storageBucket: "clock-app-72e95.appspot.com",
  messagingSenderId: "545722856840",
  appId: "1:545722856840:web:5ae3f0acd1d9f397d7f63d",
  measurementId: "G-M2MCV6RYQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// signInWithRedirect(auth, provider);
