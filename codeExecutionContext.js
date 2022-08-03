// Java Script is a synchronous single threaded langugage which means it is executed only one line of code at a time orderly.

// Whenever we run the js program. Java Script execution context is created in browser in two phases.

// 1. Memory Creation Phase it is also known as the variable Environment
// 2. Code Execution Phase it is also known as the Thread of Execution

// In Memory Creation Phase it is alloted memory to variables, in the form of key value pairs  Ex num = undefined;

// First it alloted undefined value to the variable, in memory creation phase, when it is a function it stores the as it is funciton

// In Code Execution Phase it executes the code line by line and stores asign that value to the variable

// It stores that functions call in the form of call stack is also known as the runtime stack/machine stack/program stack/control stack/execution code stack



let num = 2;

function square(num){
    ans = num * num;
    return ans
}

let square2 = square(num);
let square4 = square(4);

console.log(square2)
console.log(square4)