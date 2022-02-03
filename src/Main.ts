import {Add, Sub} from "./operator/Operators";
import Operators from "./operator/Operators";
import { addSyntheticLeadingComment } from "typescript";
function main():void{
    const add = new Operators.Add();
    const sub = new Operators.Sub();
    console.log(add.eval(3,4));
    console.log(sub.eval(3,4));
}
main();