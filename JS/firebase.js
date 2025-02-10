// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNTNHstVOSBQqoAWq7IDZPngXY6lgyHic",
  authDomain: "wellsfargo-6bc06.firebaseapp.com",
  projectId: "wellsfargo-6bc06",
  storageBucket: "wellsfargo-6bc06.firebasestorage.app",
  messagingSenderId: "643447916734",
  appId: "1:643447916734:web:e9bc4ead3977e546b436ef",
  measurementId: "G-R57BF75HW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAnalytics(app);
export { auth };
export { db };