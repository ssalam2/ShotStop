const express = require('express')
const router = express.Router() // < - - - Primary router

const { readFileSync } = require('fs')

// These all handle website page routing
router.use('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write()
    res.end()
})

module.exports = router