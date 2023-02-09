const firebaseAdmin = require("firebase-admin");
const serviceAcccount = require("./books-service-account.json");
const app = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAcccount)
})

const db = app.firestore()
const auth = firebaseAdmin.auth();
module.exports = {
    db, auth
};