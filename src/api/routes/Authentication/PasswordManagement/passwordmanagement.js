const express = require('express')
const router = express.Router() // < - - - Primary router

const { readFileSync } = require('fs')

// router.get('/pages/forgotpassword', (req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(forgotpassword) // < --- Static Page
//     res.end()
// })

// Appropriate HTTP verb???
router.get('/forgotpassword', (req, res) => {
    const email = req.params.email
    // Send email to reset password
    // Serve page to notify of email being sent
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end()
})

// router.get('/pages/newpassword', (req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(newpassword) // < --- Static Page
//     res.end()
// })

// How will I keep track of which user is changing
router.patch('/password ', (req, res) => {
    const { oldPassword, newPassword } = req.body
    // Check if oldpw matches db
    // Update db
    // Serve page to notify user of password update
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(forgotpassword) // < --- Static Page
    res.end()
})

module.exports = router