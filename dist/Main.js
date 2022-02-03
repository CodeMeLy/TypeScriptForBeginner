"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operators_1 = __importDefault(require("./operator/Operators"));
function main() {
    const add = new Operators_1.default.Add();
    const sub = new Operators_1.default.Sub();
    console.log(add.eval(3, 4));
    console.log(sub.eval(3, 4));
}
main();
