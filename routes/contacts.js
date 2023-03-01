const express = require("express")
const router = express.Router();

// api/contacts get user's contacts
router.get("/", (req, res) => {
    res.send("User's contacts")
});

router.post("/", (req, res) => {
    res.send("Create a contact")
});

// api/contacts/:id get user's contacts

router.put("/:id", (req, res) => {
    res.send("Edit a contact")
});

// api/contacts/:id get user's contacts

router.delete("/:id", (req, res) => {
    res.send("Delete a contact")
});
module.exports = router;