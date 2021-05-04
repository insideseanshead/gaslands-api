const express = require("express");
const router = express.Router();
const db = require('../models');
const jwt = require("jsonwebtoken");



router.get("/", (req, res) => {
    db.User.findAll().then(dbUsers => {
        res.json(dbUsers);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})


module.exports = router