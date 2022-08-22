const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tag: {
    type: String,
    required: true,
    default: "General",
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
