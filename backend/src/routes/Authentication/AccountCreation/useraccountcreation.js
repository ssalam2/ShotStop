const express = require('express')
const router = express.Router() // < - - - Primary router

const { readFileSync } = require('fs')

// router.get('/pages/register', (req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(signInPage)
//     res.end()
// })

router.post('/register', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(signInPage)
    res.end()
})

module.exports = router