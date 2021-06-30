import { Router } from 'express';
import { authRouter } from './authRouter';
import { protectedRouter } from './protectedRouter';

const router = Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <a href=/auth/google>Login with Google</a>
  `);
});

router.use(authRouter);
router.use(protectedRouter);

export { router };
