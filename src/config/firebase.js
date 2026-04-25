

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB2MsqK4XpcGwBizweCMIfUyOfpX9EKytU",
  authDomain: "tracknest-d22ce.firebaseapp.com",
  projectId: "tracknest-d22ce",
  storageBucket: "tracknest-d22ce.firebasestorage.app",
  messagingSenderId: "3454896853",
  appId: "1:3454896853:web:addbee7884f9802e4df05c",
  measurementId: "G-RVY9VRX29K"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}