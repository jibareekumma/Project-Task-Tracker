

import { auth } from "./firebase";
import { createUserWithEmailAndPassword, 
    GoogleAuthProvider, signInWithEmailAndPassword, 
    signInWithPopup} 
from "firebase/auth";


export const docreateUserWithAndPassword = async (email, password) => {
 
    return createUserWithEmailAndPassword(auth, email, password)
};

export const doSignInWithEmailAndPassword = async (email, password) => {

    return signInWithEmailAndPassword(auth, email, password)
};

export const doSignInWithGoogle = async() => {

    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    return result;
}

export const doSignOut = () => {

    return auth.signOut()
}