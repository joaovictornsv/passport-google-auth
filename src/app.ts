import express from 'express';
import session from 'express-session';
import passport from 'passport';
import 'dotenv/config';
import passportStrategy from '~/config/passport';

const app = express();

passportStrategy(passport);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

export { app };
