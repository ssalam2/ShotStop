const express = require('express');
const router = express.Router();
const { tokenSigning, tokenValidation } = require('lib/middleware/tokenAuth');
const jwt = require('jsonwebtoken');

var refreshToken = null;

// TODO: Integrate individual error handling and maybe don't res back the token in the body
router.post('/token', (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({ error: 'Refresh token is required' });
  }
  if (token !== refreshToken) {
    return res.status(403).json({ error: 'Invalid refresh token' });
  }

  try {
    const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    const newToken = jwt.sign(
      { username: payload.username, email: payload.email },
      process.env.JSONWEBTOKEN_SECRET,
      {
        expiresIn: '15s',
        algorithm: 'HS256',
      }
    );

    res.cookie('accessToken', newToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
    });
    return res.status(200).json({ accessToken: newToken });
  } catch (error) {
    console.error('Error validating refresh token:', error);
    return res.status(403).json({ error: 'Invalid refresh token' });
  }
});

router.post('/login', tokenSigning, (req, res) => {
  refreshToken = req.refreshToken;
  const payload = req.payload;
  res.status(201).json({ message: 'Login successful.', payload: payload });
});

router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Nice.' });
});

router.get('/testget', tokenValidation, (req, res) => {
  res.status(200).json({ message: 'Seems to be working alright.' });
});

router.delete('/logout', (req, res) => {
  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
  });
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
  });
  res.status(204).json({ message: 'Logout successful.' });
});

router.post('/register', tokenSigning, (req, res) => {
  refreshToken = req.refreshToken;
  const payload = req.payload;
  res
    .status(201)
    .json({ message: 'Registration successful.', payload: payload });
});

router.post('/reset-password', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write(signInPage);
  res.end();
});

router.post('/reset-username', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write(signInPage);
  res.end();
});

module.exports = router;
