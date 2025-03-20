const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

////////////// < - - - - SUBJECT TO CHANGE - - - - > //////////////

// Page Routers
app.use('/home', require('./routes/Pages/home'))
app.use('/oneshots', require('./routes/Pages/oneshots'))
app.use('/forums', require('./routes/Pages/forums'))
app.use('/comics', require('./routes/Pages/comics'))

// Authentication, Account Creation, and User Routers
app.use('/auth', require('./routes/Authentication/userAuth'))

//////////////////////////////////////////////////////////////////

module.exports = app