// ### Closure

// 1. In your own words, define closure (1-2 sentences).

// -  Closure is when a functions remembers the variables outside its scope even, when it's passed somewhere else.

// 2. Study the following code, then answer the questions below.

function personalDice(name) {
    return function (n) {
        // generate random number between 1 and 6
        const newRoll = Math.floor(Math.random() * n);
        console.log(`${name} rolled a ${newRoll}`);
    };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll(6);
dansRoll(100);

// * a. Where is closure used in this code? How can you tell?
/* 
The inner (return function) has closure over the `name` variable. I can tell this because, It remembers the `name` variable after the personalDice function is done executing.
*/

// * b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

/*
whats the same: The name variable is the same since its not executed again when dansRoll is called for second time.
whats different: every time we invoke a new call, it create a new variable n, hence the value of n changes for every new call.
*/

// * c. What is the lexical scope of `newRoll`? this might help https://stackoverflo`w.com/questions/1047454

/*
lexical scope means that functions are executed using the variable scope that was in 
effect when they were defined, not the variable scope that is in effect when they are invoked.
*/

// 3. Write a function that would allow you to do this using a closure.

function createBase(six) {
    const inner = function (n) {
        console.log(n + six);
    };
    return inner;
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
