const User = require("./../models/User");
const fetchUser = require("./../middleware/fetchUser")

const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post("/createuser", body('name', "Enter a valid name").isLength({ min: 3 }), body('email', "Enter a valid email").isEmail(),
    body('password', "Your password should have atleast 5 characters").isLength({ min: 5 }), (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            for (error of errors.array()) {
                console.log(`${error.value} is not a valid ${error.param}`);
                // console.log(`${error.msg}`);
            }
            return res.status(400).json({ errors: errors.array() });
        }
        bcrypt.hash(req.body.password, 12)
            .then((hash) => {
                req.body.password = hash;
            })
            .then(() => {
                const user = new User(req.body);
                user.save()
                    .then(() => {
                        const data = {
                            user: {
                                id: user.id
                            }
                        }
                        var token = jwt.sign(data, 'secret$shhhh');
                        res.json(token);
                    })
                    .catch((error) => {
                        if (error.code === 11000) {
                            if (error.keyValue.username) {
                                console.log(`${error.keyValue.username} already exists`);
                            } else if (error.keyValue.email) {
                                console.log(`${error.keyValue.email} already exists`);
                            } else {
                                console.log(`User already exists`);
                            }
                        }
                        console.log(error);
                        res.send("There was some issue in creating the user.");
                    })
            })
            .catch((err) => {
                console.log(err);
                res.send("Something went wrong in generating the hash");
            })
    })

router.post("/login", body('email', "Enter a valid email").isEmail(),
    body('password', "Password cannot be blank").exists(), async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            for (error of errors.array()) {
                console.log(`${error.value} is not a valid ${error.param}`);
                // console.log(`${error.msg}`);
            }
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "Email or password incorrect." });
            }
            bcrypt.compare(password, user.password)
                .then((result) => {
                    if (!result) {
                        return res.status(400).json({ error: "Email or password incorrect." });
                    } else {
                        const data = {
                            user: {
                                id: user.id
                            }
                        }
                        var token = jwt.sign(data, 'secret$shhhh');
                        res.json(token);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    return res.status(400).json({ error: "Something went wrong at our end" });
                })
        } catch (error) {
            console.log(error);
            res.send("Something went wrong at our end");
        }
    })

router.post("/getuser", fetchUser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error);
        res.send("Something went wrong at our end");
    }
})

module.exports = router;