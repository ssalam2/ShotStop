require('dotenv').config();
const jwt = require('jsonwebtoken');

function tokenSigning(req, res, next) {
  // sequelize query here
  // check whether username is in db
  // check whether password is correct
  // send a User instance back???

  // TODO: Implement
  if (req.path === '/register') {
  } else if (req.path === '/login') {
  } else {
    return res.status(400).send('Invalid request path for token signing');
  }

  const { username, email } = req.body;
  // TODO: Possibly handled by the frontend
  if (username == null || email == null) {
    return res.status(400).send('One of the required fields is missing');
  }

  const payload = {
    username: username,
    email: email,
  };

  try {
    // TODO: Implement callback and tweak maxAge
    const accessToken = jwt.sign(payload, process.env.JSONWEBTOKEN_SECRET, {
      expiresIn: '15s',
      algorithm: 'HS256',
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      algorithm: 'HS256',
    });

    req.accessToken = accessToken;
    req.refreshToken = refreshToken;
    req.payload = payload;
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 36000,
      sameSite: 'Strict',
    });
    next();
  } catch (error) {
    console.error('Error signing token:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

function tokenValidation(req, res, next) {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JSONWEBTOKEN_SECRET);

    // Respond with the decoded token payload
    req.user = decoded;
    next();
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

module.exports = { tokenSigning, tokenValidation };
