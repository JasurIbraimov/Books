const { initializeApp } = require("firebase/app")
const { getAuth } = require("firebase/auth")
const dotenv = require("dotenv").config()
const firebaseConfig = {
    apiKey: process.env.BOOKS_API_KEY,
    authDomain: process.env.BOOKS_AUTH_ADMIN,
    projectId: process.env.BOOKS_PROJECT_ID,
    storageBucket: process.env.BOOKS_STORAGE_BUCKET,
    messagingSenderId: process.env.BOOKS_MESSAGE_SENDER_ID,
    appId: process.env.BOOKS_APP_ID,
    measurementId: process.env.BOOKS_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);

module.exports = auth;