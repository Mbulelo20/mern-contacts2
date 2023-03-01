const express = require("express")
const router = express.Router();

// api/auth get logged in user user
router.get("/", (req, res) => {
    res.send("Get the user")
});

// api/users login a user and get a token
router.post("/", (req, res) => {
    res.send("Logged in")
});


module.exports = router;