// Array Methods

let array = [1, 2, 3, 4];

/**
 * 1. map - it like for Loop
 *    [ it Return as an Array new]
 * 2. filter
 * 3. reduce
 */

array.map((items) => {
  console.log(items);
});

const ans = array.map((number, index) => {
  return number * number;
});

console.log("ans:", ans);
console.log("org:", array);

// filter -
// [ it return as an New Array ]

const ans2 = array.filter((i) => {
  return i > 3;
});

// let array = [1, 2, 3, 4, 5,15];
const ans3 = array.filter((items) => {
  return items > 10;
});

// [15]

console.log("ans3:", ans3);
console.log("org:", array);
//[1, 2, 3, 4] - [6,4]

// reduce()

const ans5 = array.reduce((accumlator, currentValue) => {
  return accumlator + currentValue;
});
console.log("ans:", ans5);
console.log("org:", array);

// -----------------

// 4. Flat
let arr1 = [0, 1, 2, [3, 4]];
let arr2 = [0, 1, 2, [[3, 4]]];

// [0, 1, 2, 3, 4]
console.log(arr1.flat());

// [0, 1, 2, [3, 4]]
console.log(arr2.flat(3));

let nam = ["cat", "dog", "ball"];
// 5. Reverse
array.reverse();

console.log("before", arr1);
arr1.flat();
console.log("after", arr1);

/***
 * map ,filter , reduce , pop , push , reverse, flat
 *
 * Mutable
 * - if array changes orginal Array
 *  - pop
 *  - push
 *  - reverse
 *
 * Immutable
 *  - if array does not changes [ Immutable  ]
 *  - map
 *  - filter
 *  - reduce
 *  - flat
 *  */

//  Creating a Function
// para
function add(a, b) {
  console.log("sjp");
  console.log("sjp");
  console.log("sjp");
  return 5;
}

// Calling a Function by Name
let a = add();
console.log(a);

// How to Pass Values to Function
add(5, 5); // arg

// Arrow Function
// add()
const add2 = (a, b) => {
  console.log("Arrow Function");
  console.log(a + b);
  return a + b;
};

const k = add2(5, 6);
console.log(k);

// An - () => {} , function () {}
console.log();

// Function as Expression
const express = function () {
  return 10
}

console.log(express)