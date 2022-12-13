const mongoose = require("mongoose");

const url = "mongodb+srv://inotebook:nBMc6sfowArfN94E@cluster0.vf78h77.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => {
            console.log("Mongo Connection Successful");
        })
        .catch((error) => {
            console.log("Mongo Connection Failed");
            console.log(error);
        })
}

module.exports = connectToMongo;