const express = require("express");
const router = express.Router();


router.get("/", (req, res) => (
    res.send("Welcome to Gaslands!")
));



module.exports = router