import Operator from "./Operator";
export class Sub implements Operator{
    eval(a:number, b:number): number{
        return a-b;
    }
}
export default Sub;