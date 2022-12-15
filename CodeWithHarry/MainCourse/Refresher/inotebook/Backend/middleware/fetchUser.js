const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, "secret$shhhh");
        req.user = data.user;
        console.log("req.user: " + req.user + "|| data.user: " + data.user);
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}

module.exports = fetchUser;