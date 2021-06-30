import { PassportStatic } from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

export default (passport: PassportStatic) => {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3333/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    done(null, profile);
  }));
};
