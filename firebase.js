
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAJzGuLs8U0HBi_bCuisxEVBNsyr1nXrH8",
    authDomain: "native-app-e3d72.firebaseapp.com",
    projectId: "native-app-e3d72",
    storageBucket: "native-app-e3d72.appspot.com",
    messagingSenderId: "573121437643",
    appId: "1:573121437643:web:1550e6c6c9477c2fb9204e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)

