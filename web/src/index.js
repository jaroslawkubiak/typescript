"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./models/User");
console.log('hi');
var user = new User_1.User({ name: 'Jarek', age: 40 });
console.log(user.get('age'));
console.log(user.get('name'));
