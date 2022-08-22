const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");

const dbConnection = require("./database");
dbConnection();

const port = 3000 || 8080;

app.get("/", (req, res) => {
  res.send("Gottcha Bitches...");
});

app.use("/auth/", authRoutes);
app.use("/notes/", notesRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
