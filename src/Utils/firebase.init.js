
import { initializeApp } from "firebase/app";
import { firebase } from "firebase";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCB2TBza59L5rtmpI1B6n2qKfh1nt8mgn8",
  authDomain: "ssos-89fd2.firebaseapp.com",
  projectId: "ssos-89fd2",
  storageBucket: "ssos-89fd2.appspot.com",
  messagingSenderId: "167979537464",
  appId: "1:167979537464:web:dbe196fa1106a3c970c2cd",
  measurementId: "G-HF2Z122190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app)
// const storage = firebase.storage();
  
// export default storage;