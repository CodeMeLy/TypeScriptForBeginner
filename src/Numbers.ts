export function output(numbers:Array<number>):void {
    let result = "";
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i] + " ";
    }
    console.log(`Arrray: ${result}`);
}