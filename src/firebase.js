
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA33COhuXLVt4vow3jZ3QL1u6TG2YbbKTM",
  authDomain: "my-react-notes-7eb48.firebaseapp.com",
  projectId: "my-react-notes-7eb48",
  storageBucket: "my-react-notes-7eb48.appspot.com",
  messagingSenderId: "702908744460",
  appId: "1:702908744460:web:dc7647bcd7a442f9173f29",
  measurementId: "G-Y9X27F7Q9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")