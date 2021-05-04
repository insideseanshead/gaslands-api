const express = require('express')
const passport = require('passport')
const router = express.Router()


//Auth with google
//Route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//Google auth callback
//Route Get /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        console.log("dashboard")
    })

// Logout User
// Route /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})


module.exports = router