const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    },
    tags: {
        type: String,
        enum: ["General", "Important", "Work", "Temp."],
        default: "General",
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;