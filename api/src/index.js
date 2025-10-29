const express = require('express');
require('dotenv').config();
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

////////////// < - - - - SUBJECT TO CHANGE - - - - > //////////////

// Authentication, Account Creation, and User Routers
// app.use('/auth', require('../../auth/src/routes/userAuth'))
// app.use('/user-management', require('./routes/profile'))

//////////////////////////////////////////////////////////////////

app.listen(process.env.PORT, () => {
  console.log('API server is running on port', process.env.PORT);
});
