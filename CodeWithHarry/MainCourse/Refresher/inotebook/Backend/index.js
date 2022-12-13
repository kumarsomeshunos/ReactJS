const connectToMongo = require("./db");
const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");

const express = require("express");
const app = express();

connectToMongo();

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})