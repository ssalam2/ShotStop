import { ExpressAuth } from '@auth/express';
import Google from '@auth/express/providers/google';
import express from 'express';

const router = express.Router();

// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
// router.set("trust proxy", true)  // TODO: May not need
router.use('/auth/*', ExpressAuth({ providers: [Google] }), (req, res) => {
  res.send('<p> Yeah </p>');
});

export default router;
