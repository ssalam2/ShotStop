const express = require('express')
const router = express.Router() // < - - - Primary router
const { tokenSigning, tokenValidation } = require('../../../middleware/tokenAuth'); // TODO: Might need to change

const { readFileSync } = require('fs')

// These all handle user account routing
// router.get('/pages/signin', (req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(signInPage)
//     res.end()
// })

router.post('/login', tokenSigning)

// router.get('/pages/signout', (req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(signInPage)
//     res.end()
// })

// TODO: Complete
router.delete('/logout', insertMiddleWareHere)

module.exports = router