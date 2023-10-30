"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("\n      Not permitted<br />\n      <a href=\"/login\">Login form</a><br />\n      <a href=\"/\">HOME</a><br />\n    ");
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    // home page
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            // user is logged in
            res.send("\n          <div style=\"padding: 10px; margin:10px;\">\n              <p>You are logged in</p><br />\n              <a href=\"/auth/logout\">Logout</a>\n              <a href=\"/auth/protected\">protected</a><br />\n          </div>\n      ");
        }
        else {
            // faild to login
            res.send("\n          <div style=\"padding: 10px; margin:10px;\">\n              <p>You are NOT logged in</p>\n              <a href=\"/auth/login\">Login form</a><br />\n              <a href=\"/auth/protected\">protected</a><br />\n          </div>\n      ");
        }
    };
    // protected route
    RootController.prototype.getProtected = function (req, res) {
        res.send("\n    Welcome to protecded route.<br />\n    <a href=\"/\">HOME</a><br />\n    ");
    };
    __decorate([
        (0, decorators_1.get)('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        (0, decorators_1.get)('/auth/protected'),
        (0, decorators_1.use)(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        (0, decorators_1.controller)('')
    ], RootController);
    return RootController;
}());
