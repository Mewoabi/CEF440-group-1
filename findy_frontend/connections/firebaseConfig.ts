// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVsw-I0CrSnepdFbSHWHvyGAwKzaJ1bHU",
  authDomain: "lost-items-app.firebaseapp.com",
  projectId: "lost-items-app",
  storageBucket: "lost-items-app.appspot.com",
  messagingSenderId: "375746041352",
  appId: "1:375746041352:web:77622976fceb8fd10963bd",
  measurementId: "G-MHBS710ZGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
