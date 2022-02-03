"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sub = exports.Add = void 0;
const Add_1 = __importDefault(require("./Add"));
exports.Add = Add_1.default;
const Sub_1 = __importDefault(require("./Sub"));
exports.Sub = Sub_1.default;
exports.default = { Add: Add_1.default, Sub: Sub_1.default };
