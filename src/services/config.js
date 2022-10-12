
import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import "firebase/firestore"
const config = {
  apiKey: "AIzaSyB6ZCKMUtOv1sZuMmxMlp3Ad8_mWAMTfoY",
  authDomain: "arcoden-f732e.firebaseapp.com",
  projectId: "arcoden-f732e",
  storageBucket: "arcoden-f732e.appspot.com",
  messagingSenderId: "359593111186",
  appId: "1:359593111186:web:11cda189acb3421c91404b",
  measurementId: "G-YPRPJ9LMQH"

};

// Initialize Firebase 
export const app = initializeApp(config);
export const db = getFirestore(app);
console.log("Firebase initialisé avec success");
// const analytics = getAnalytics(app);888