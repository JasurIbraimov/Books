const express = require("express");
const db = require("./admin");
const auth = require("./firebaseAPI");
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth")
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = 8000
// API Reference 
app.get("", (req, res) => {
    return res.status(200).send()
})

app.get("/api/books", async (req, res) => {
    const booksRef = db.collection("books");
    const booksSnapShot = await booksRef.get();
    const books = booksSnapShot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()  
    }))

    return res.status(200).send(books)
})

app.post("/api/accounts/signup", async (req, res) => {
    const {email, password} = req.body
    const creatingUserResponse = await createUserWithEmailAndPassword(auth,  email, password)
    return res.send(creatingUserResponse.user)
})

app.post("/api/accounts/signin",async (req, res) => {
    const {email, password} = req.body
    const creatingUserResponse = await signInWithEmailAndPassword(auth,  email, password)
    return res.send(creatingUserResponse)
} )



app.listen(PORT, () => {
    console.log("Server is RUNNING at the PORT " + PORT)
})
