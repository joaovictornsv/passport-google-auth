import { Request, Response, NextFunction } from 'express';

function isLoggedIn(req: Request, res: Response, next: NextFunction): void | Response {
  if (req.user) { return next(); }
  return res.sendStatus(401);
}

export { isLoggedIn };
