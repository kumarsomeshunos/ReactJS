const User = require("./../models/User");

const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => {
            res.send("User created successfully!");
        })
        .catch((error) => {
            console.log(error);
            res.send("There was some issue in creating the user.");
        })
})

module.exports = router;