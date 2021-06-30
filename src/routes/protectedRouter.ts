import { Request, Response, Router } from 'express';
import { Profile } from 'passport';
import { isLoggedIn } from '~/middlewares/isLoggedIn';

interface IRequestProtectedRoute extends Request {
  user: Profile;
}

const router = Router();

router.get(
  '/protected',
  isLoggedIn,
  (req:IRequestProtectedRoute, res: Response) => {
    const { user } = req;

    res.send(`
    <img width=200 src="${user.photos[0].value}" />
    <h1>Hello ${user.displayName}</h1>
    <h4>Your email: ${user.emails[0].value}</h4>
    <a href="/logout">Logout</a>
    `);
  },
);

export { router as protectedRouter };
