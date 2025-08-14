const express = require('express')
const router = express.Router() // < - - - Primary router

const { readFileSync } = require('fs')

const signInPage = readFileSync('./navbar-app/stuff.html')

// These all handle website page routing
router.use('/home', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

router.use('/forums', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

router.use('/oneshots', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

router.use('/about', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

router.use('/comics', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

module.exports = router