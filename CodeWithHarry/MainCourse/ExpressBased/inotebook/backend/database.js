const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/inotebook";

mongoose.connect(url)
    .then(() => {
        console.log("Mongo Connection Successful")
    })
    .catch((error) => {
        console.log("Mongo Connection Failed")
    })