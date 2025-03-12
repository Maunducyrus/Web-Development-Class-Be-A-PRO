// Arithmetic Operators
console.log("=== Arithmetic Operators ===");
let a = 10;
let b = 5;
console.log("Addition (a + b):", a + b); // 15
console.log("Subtraction (a - b):", a - b); // 5
console.log("Multiplication (a * b):", a * b); // 50
console.log("Division (a / b):", a / b); // 2
console.log("Modulus (a % b):", a % b); // 0
console.log("Exponentiation (a ** b):", a ** b); // 100000
console.log("Increment (a++):", a++); // 10 (post-increment)
console.log("Decrement (b--):", b--); // 5 (post-decrement)

// Comparison Operators
console.log("\n=== Comparison Operators ===");
console.log("Equal (a == b):", a == b); // false
console.log("Strict Equal (a === b):", a === b); // false
console.log("Not Equal (a != b):", a != b); // true
console.log("Strict Not Equal (a !== b):", a !== b); // true
console.log("Greater Than (a > b):", a > b); // true
console.log("Less Than (a < b):", a < b); // false
console.log("Greater Than or Equal (a >= b):", a >= b); // true
console.log("Less Than or Equal (a <= b):", a <= b); // false

// Logical Operators
console.log("\n=== Logical Operators ===");
let x = true;
let y = false;
console.log("AND (x && y):", x && y); // false
console.log("OR (x || y):", x || y); // true
console.log("NOT (!x):", !x); // false

// Assignment Operators
console.log("\n=== Assignment Operators ===");
let c = 10;
console.log("Assignment (c = 10):", c); // 10
c += 5; // c = c + 5
console.log("Add and Assign (c += 5):", c); // 15
c -= 3; // c = c - 3
console.log("Subtract and Assign (c -= 3):", c); // 12
c *= 2; // c = c * 2
console.log("Multiply and Assign (c *= 2):", c); // 24
c /= 4; // c = c / 4
console.log("Divide and Assign (c /= 4):", c); // 6
c %= 5; // c = c % 5
console.log("Modulus and Assign (c %= 5):", c); // 1

// Ternary Operator
console.log("\n=== Ternary Operator ===");
let age = 20;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log("Ternary (age >= 18 ? 'Adult' : 'Minor'):", isAdult); // Adult

// Type Operators
console.log("\n=== Type Operators ===");
console.log("typeof a:", typeof a); // number
console.log("typeof 'Hello':", typeof "Hello"); // string
console.log("typeof true:", typeof true); // boolean
console.log("typeof null:", typeof null); // object
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof [1, 2, 3]:", typeof [1, 2, 3]); // object
console.log("typeof { name: 'John' }:", typeof { name: "John" }); // object

// Bitwise Operators (Optional)
console.log("\n=== Bitwise Operators ===");
let d = 5; // Binary: 0101
let e = 3; // Binary: 0011
console.log("AND (d & e):", d & e); // 1 (Binary: 0001)
console.log("OR (d | e):", d | e); // 7 (Binary: 0111)
console.log("XOR (d ^ e):", d ^ e); // 6 (Binary: 0110)
console.log("NOT (~d):", ~d); // -6 (Binary: 1010)
console.log("Left Shift (d << 1):", d << 1); // 10 (Binary: 1010)
console.log("Right Shift (d >> 1):", d >> 1); // 2 (Binary: 0010)