const firebaseAdmin = require("firebase-admin");
const serviceAcccount = require("./books-service-account.json");
const app = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAcccount)
})

const db = app.firestore()

module.exports = db;