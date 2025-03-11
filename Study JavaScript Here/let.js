// let x = 5;
// console.log(x);

// var y = 10;
// console.log(y);

// var z = 12;
// console.log(z);

// Checking function Block Scope

function count() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
};
count()

// Comparison Operators
let x = 10
let y = 6

if (x > 5) {
    console.log('x is greater than y')
}