import axios from "axios";
import { auth } from "../config/firebase-config";
import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from "firebase/auth";
export const fetchAllBooks = async (token) => {
    const res = await axios.get("http://localhost:8000/api/books", {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
    return res.data;
};
export const loginWithGoogle = async () => {
    const userCredentials = await signInWithPopup(auth, new GoogleAuthProvider());
    return userCredentials;
};
export const loginWithEmailAndPassWord = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    return userCredentials;
};
