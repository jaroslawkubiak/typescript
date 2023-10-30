import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send(`
      Not permitted<br />
      <a href="/login">Login form</a><br />
      <a href="/">HOME</a><br />
    `);
}

@controller('')
class RootController {
  // home page
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      // user is logged in
      res.send(`
          <div style="padding: 10px; margin:10px;">
              <p>You are logged in</p><br />
              <a href="/auth/logout">Logout</a>
              <a href="/auth/protected">protected</a><br />
          </div>
      `);
    } else {
      // faild to login
      res.send(`
          <div style="padding: 10px; margin:10px;">
              <p>You are NOT logged in</p>
              <a href="/auth/login">Login form</a><br />
              <a href="/auth/protected">protected</a><br />
          </div>
      `);
    }
  }

  // protected route
  @get('/auth/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
    Welcome to protecded route.<br />
    <a href="/">HOME</a><br />
    `);
  }
}
