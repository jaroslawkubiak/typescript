"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("\n    Not permitted<br />\n    <a href=\"/login\">Login form</a><br />\n    <a href=\"/\">HOME</a><br />\n  ");
}
var router = (0, express_1.Router)();
exports.router = router;
// login to app
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // makr this person as logged
        req.session = { loggedIn: true };
        // redirect to main route
        res.redirect('/');
    }
    else {
        res.send("Invalid email or password<br /> \n    <a href=\"/auth/login\">Login form</a><br />\n    <a href=\"/\">HOME</a><br />\n    ");
    }
});
// home page
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        // user is logged in
        res.send("\n        <div style=\"padding: 10px; margin:10px;\">\n            <p>You are logged in</p><br />\n            <a href=\"/auth/logout\">Logout</a>\n            <a href=\"/auth/protected\">protected</a><br />\n        </div>\n    ");
    }
    else {
        // faild to login
        res.send("\n        <div style=\"padding: 10px; margin:10px;\">\n            <p>You are NOT logged in</p>\n            <a href=\"/auth/login\">Login form</a><br />\n            <a href=\"/auth/protected\">protected</a><br />\n        </div>\n    ");
    }
});
// logout route
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
// protected route
router.get('/protected', requireAuth, function (req, res) {
    res.send("\n  Welcome to protecded route.<br />\n  <a href=\"/\">HOME</a><br />\n  ");
});
