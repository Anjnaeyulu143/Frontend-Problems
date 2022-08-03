// Hoisting is a concept in JavaScript we can able to access before its intialiaztion

// Which means whenever we run the js program. Global Execution Context is created in browser. First it travels the entire each line of code and it allocated memory in memory creation phase

// If there is a function decleartion in program. Its assigns entire function as a value to the key called that function name. In Memory creation phase.

// Var variable x, undefined is assigned as a value to the key variable x


// Let's Check by running the code........


// Ex...


getName();
console.log(x);

var x = 21;

function getName() {
    console.log("Hello Anjaneyulu");
}

