import { NextFunction, Request, Response } from 'express';
import { get, post, controller, bodyValidator } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <div>
      <form method="post" style="padding: 10px; margin:10px; display: grid;">
        <div style="margin:10px">
            <label>Email</label>
            <input name="email" type="text"/>
        </div>
        <div style="margin:10px">
            <label>Password</label>
            <input name="password" type="text"/>
        </div>
        <div style="margin:10px">
            <button>Submit</button>
        </div>
        <a href="/">HOME</a><br />
      </form>
      </div>
      `);
  }

  // login to app
  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
      // mark this person as logged
      req.session = { loggedIn: true };
      // redirect to main route
      res.redirect('/');
    } else {
      res.send(`Invalid email or password<br /> 
    <a href="/auth/login">Login form</a><br />
    <a href="/">HOME</a><br />
    `);
    }
  }

// logout route
@get('/logout')
getLogout(req: Request, res: Response) {
  req.session = undefined;
  res.redirect('/');
}  
}
