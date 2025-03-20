// const app = require('./app')
const express = require('express')
const app = express()
const [ sequelize ]  = require('./models/User')

app.listen(8080, () => console.log(sequelize.models.User))


// app.listen(8080, () => console.log('nice'))