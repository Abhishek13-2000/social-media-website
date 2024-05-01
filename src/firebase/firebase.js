
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyCYYbFLuYMg9hbBGD7MgeqmmgEGrclx1PA",
  authDomain: "social-media-2664e.firebaseapp.com",
  projectId: "social-media-2664e",
  storageBucket: "social-media-2664e.appspot.com",
  messagingSenderId: "766311419574",
  appId: "1:766311419574:web:8c273eeac4ad42a1546017",
  measurementId: "G-27NVCYXSHT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, auth, firestore, storage };
