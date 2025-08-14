const express = require('express')
const router = express.Router() // < - - - Primary router

const { readFileSync } = require('fs')

const signInPage = readFileSync('./navbar-app/stuff.html')

// These all handle user account routing
router.get('/signin', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

router.put('/signin', (req, res) => {
    const {username, password} = req.body

    if (username == null || password == null) {
        res.status(400).send('One of the required fields is missing')
    }
    // sequelize query here
    // check whether username is in db
    // check whether password is correct
    // send a User instance back???
    res.status(200).json()
})

router.use('/signout', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

router.use('/createaccount', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

router.use('/forgotpassword', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

router.use('/settings', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

router.use('/profile', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

module.exports = router