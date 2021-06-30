import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google/unauthorized',
    successRedirect: '/protected',
  }),
);

router.get(
  '/auth/google/unauthorized',
  (req, res) => {
    res.sendStatus(401);
  },
);

router.get(
  '/logout',
  (req, res) => {
    req.logout();
    req.session.destroy(() => res.redirect('/'));
  },
);

export { router as authRouter };
