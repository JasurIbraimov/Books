const express = require("express");
const cors = require("cors");
const { db } = require("./admin");
const { decodeToken } = require("./middleware");
const app = express();

app.use(cors());
app.use(decodeToken);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8000;
// API Reference
app.get("", (req, res) => {
    return res.status(200).send();
});
app.get("/api/books", async (req, res) => {
    const booksRef = db.collection("books");
    const booksSnapShot = await booksRef.get();
    const books = booksSnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return res.status(200).send(books);
});

app.listen(PORT, () => {
    console.log("Server is RUNNING at the PORT " + PORT);
});
