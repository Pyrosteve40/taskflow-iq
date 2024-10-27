// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8aS72_jQsz2w0dP_RngEcuErqifTp4QM",
  authDomain: "taskflowiq.firebaseapp.com",
  projectId: "taskflowiq",
  storageBucket: "taskflowiq.appspot.com",
  messagingSenderId: "345091380304",
  appId: "1:345091380304:web:1e02e8e13879b634772d55",
  measurementId: "G-Y1Y7ZM401Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export Firebase services
export { db, auth, analytics };
