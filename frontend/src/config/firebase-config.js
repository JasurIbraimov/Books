import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_BOOKS_API_KEY,
    authDomain: process.env.REACT_APP_BOOKS_AUTH_ADMIN,
    projectId: process.env.REACT_APP_BOOKS_PROJECT_ID,
    storageBucket: process.env.REACT_APP_BOOKS_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_BOOKS_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_BOOKS_APP_ID,
    measurementId: process.env.REACT_APP_BOOKS_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app)