"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
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
const router = (0, express_1.Router)();
exports.router = router;
// login form
router.get('/login', (req, res) => {
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
});
// login to app
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // makr this person as logged
        req.session = { loggedIn: true };
        // redirect to main route
        res.redirect('/');
    }
    else {
        res.send(`Invalid email or password<br /> 
    <a href="/login">Login form</a><br />
    <a href="/">HOME</a><br />
    `);
    }
});
// home page
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        // user is logged in
        res.send(`
        <div style="padding: 10px; margin:10px;">
            <p>You are logged in</p><br />
            <a href="/logout">Logout</a>
            <a href="/protected">protected</a><br />
        </div>
    `);
    }
    else {
        // faild to login
        res.send(`
        <div style="padding: 10px; margin:10px;">
            <p>You are NOT logged in</p>
            <a href="/login">Login form</a><br />
            <a href="/protected">protected</a><br />
        </div>
    `);
    }
});
// logout route
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
// protected route
router.get('/protected', requireAuth, (req, res) => {
    res.send(`
  Welcome to protecded route.<br />
  <a href="/">HOME</a><br />
  `);
});
