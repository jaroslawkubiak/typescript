import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

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

const router = Router();

// login to app
router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    // makr this person as logged
    req.session = { loggedIn: true };
    // redirect to main route
    res.redirect('/');
  } else {
    res.send(`Invalid email or password<br /> 
    <a href="/auth/login">Login form</a><br />
    <a href="/">HOME</a><br />
    `);
  }
});

// home page
router.get('/', (req: Request, res: Response) => {
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
});

// logout route
router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

// protected route
router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`
  Welcome to protecded route.<br />
  <a href="/">HOME</a><br />
  `);
});

export { router };
