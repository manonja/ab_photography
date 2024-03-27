// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcAcjFlTgopKF35TYG4JjN6dY-vRJryS8",
    authDomain: "ab-photography-5af63.firebaseapp.com",
    projectId: "ab-photography-5af63",
    storageBucket: "ab-photography-5af63.appspot.com",
    messagingSenderId: "181523255458",
    appId: "1:181523255458:web:f28f78c9ba65016931c7fb",
    measurementId: "G-HJXRJ6CJ9T"
};



// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://your-firebase-project.firebaseio.com"
// });


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {app, storage, analytics}