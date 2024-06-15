// Print
console.log("Hello World");

// Variable
let data = "Car";
data = "bike";
var num = 1;
num = 2;

{
  var num2 = 10;
  let names = "cat";
  console.log("let:", data);
  console.log("var:", num);
}
console.log("--outside the block---");
// console.log("let:",names)
console.log("var:", num2);

const pi = 3.14;
console.log(pi);

// Operation

let x = 5;
let y = 10;

let z = ++y; // pre - 10+1 = 11
let f = x++; // post - 5

console.log("::pre=", z);
console.log("::post=", f);

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Data Types
/**
 * String
 * Number
 * boolen
 * null
 * unde
 **/

var str = "venkat";
let number = 100;
let sig = true;
let water = null;

console.log(typeof str, typeof number, sig, water);

// para
function add(a, b) {
  console.log(a + b);
}

// arg
add(5, 5);
add(10, 10);
add(20, 20);

function area(l, b) {
  return l * b;
}

let ans = area(5, 5);
console.log(ans);

let val = 10;

if (val < 10) {
  console.log("Val lesser than 10");
} else {
  console.log("Val greater than 10");
}

for (let i = 0; i < 101; i = i + 1) {
  console.log(i)
}
