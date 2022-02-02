"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.output = void 0;
function output(numbers) {
    let result = "";
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] + " ";
    }
    console.log(`Arrray: ${result}`);
}
exports.output = output;
