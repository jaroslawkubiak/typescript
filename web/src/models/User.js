"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(data) {
        this.data = data;
    }
    User.prototype.get = function (propName) {
        return this.data[propName];
    };
    return User;
}());
exports.User = User;
