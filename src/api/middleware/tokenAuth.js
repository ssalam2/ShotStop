require('dotenv').config()
const jwt = require('jsonwebtoken')

function tokenSigning(req, res) {
    // sequelize query here
    // check whether username is in db
    // check whether password is correct
    // send a User instance back???

    const {username, email} = req.body
    // TODO: Possibly handled by the frontend
    if (username == null || email == null) {
        return res.status(400).send('One of the required fields is missing')
    }

    const payload = {
        username: username,
        email: email
    }

    try {
        // TODO: Implement callback
        const token = jwt.sign(payload, process.env.JSONWEBTOKEN_SECRET, {
            expiresIn: '1h',
            algorithm: 'HS256'
        })
    
        res.status(200).json({
            token: token
        });
    } catch (error) {
        console.error('Error signing token:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

function tokenValidation(req, res, next) {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JSONWEBTOKEN_SECRET);

        // Respond with the decoded token payload
        res.status(200).json({
            message: 'Token is valid',
            user: decoded // Include the decoded payload (e.g., userId, email)
        });
        
        next()
    } catch (error) {
        console.error('Error validating token:', error);

        // Handle specific JWT errors
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid token' });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token has expired' });
        } else {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = { tokenSigning, tokenValidation }