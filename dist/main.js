"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animals_1 = require("./Animals");
const dog = (0, Animals_1.buyPet)('dog', 'Minh Minh');
console.log(dog);
console.log((0, Animals_1.isDog)(dog));
