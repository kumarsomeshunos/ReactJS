const Notes = require("./../models/Note");
const fetchUser = require("../middleware/fetchUser");

const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get("/fetchallnotes", fetchUser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
})

router.post("/addnote", body('title', "Please enter at title").exists(), fetchUser, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        for (error of errors.array()) {
            console.log(`${error.value} is not a valid ${error.param}`);
            // console.log(`${error.msg}`);
        }
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.user);
    console.log(req.body);

    try {
        req.body.user = req.user.id;
        const notes = new Notes(req.body);
        await notes.save();
        res.json(notes);
    }
    catch {
        console.log(error);
        res.json("Something went wrong, couldn't save your note");
    }
})

router.put("/updatenote/:id", body('title', "Please enter at title").exists(), fetchUser, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        for (error of errors.array()) {
            console.log(`${error.value} is not a valid ${error.param}`);
            // console.log(`${error.msg}`);
        }
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // const notes = Notes.findByIdAndUpdate(id, {});
        const notes = await Notes.findById(req.params.id);
        if (!notes) {
            return res.status(404).send("Not Found");
        }
        if (notes.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        if (req.body.title !== notes.title && req.body.title) {
            notes.title = req.body.title;
        }
        if (req.body.body !== notes.body) {
            notes.body = req.body.body;
        }
        if (req.body.tags !== notes.tags) {
            notes.tags = req.body.tags;
        }
        await notes.save();
        res.json(notes);
    } catch (error) {
        console.log(error);
        res.json("Something went wrong, couldn't update your note");
    }
})

router.delete("/deletenote/:id", fetchUser, async (req, res) => {
    try {
        const notes = await Notes.findById(req.params.id);
        if (!notes) {
            return res.status(404).send("Not Found");
        }
        if (notes.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        await Notes.findByIdAndDelete(req.params.id);
    } catch (error) {
        console.log(error);
        res.json("Something went wrong, couldn't delete your note");
    }
})

module.exports = router;