const express = require("express")
const router = express.Router();
const {check, validationResult} = require("express-validator")
const User = require("../models/User")

// validations
const checkFields = [
    check('name', "Please add your name").not().isEmpty(), 
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with at least 6 characters').isLength({min: 6})

]


// api/users register a user
router.post("/", checkFields,(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.ar })
    }
});


module.exports = router;