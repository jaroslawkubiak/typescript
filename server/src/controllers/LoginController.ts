import { Request, Response } from 'express';
import { get, controller } from './decorators';

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
}
