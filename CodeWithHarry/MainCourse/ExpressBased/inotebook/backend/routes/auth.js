const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
    res.send("Well well well... you reached at auth")
})

module.exports = router;