/**
 * 1. Spread
 *
 * 2. Rest
 */

// Array
// 1. Spread : unpack the element into indivdual Elements ( ...name )

let arr1 = [1, 2, 3];
console.log(...arr1);

let arr2 = [0, ...arr1, 4, 5]; //[0,1,2,3,4,5]
console.log(arr2);

// Create a Copy
let arr3 = [1, 2, 3, ...arr2]; //[1, 2, 3];
console.log(arr3);

// Concatenation
let arr5 = [...arr1, ...arr2]; // [arr1+arr2]
console.log(arr5);

// Objects

let person1 = {
  name: "venkat",
  age: 1,
};

let personDetails = { ...person1, city: "chennai" };
console.log(personDetails);

// Create a Copy

let person2 = { ...person1 };
console.log("Person2:", person2);

// Concatenation
let person3 = { ...person1, ...personDetails }; // {person1,person2}
console.log(person3);

/**
 * Spread with Array
 * Spread with Object
 * Spread with function
 *  */
// Spread with function
console.log("========================");
// para
function add(a, b) {
  console.log(a + b);
}

let arr = [1, 2, 3, 4, 5, 6];

add(...arr); // arg // add(1,2,3,4,5,6)

// Rest : Pack into Array ( ...anyName )

function sub(a, b, c, ...arg) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(arg);
}

let arr8 = [1, 2, 3, 4, 5, 6];

sub(...arr8); // arg // sub(1,2,3,4,5,6)

// Rest --> Always it should be at Last

// String Methods
console.log("========================");
let names = "  Car Bike ";

// Help to Give as Length
console.log(names.length);

// in Form of Array
console.log(names.split("✨"));

// convet all to lowerCase
console.log(names.toLowerCase());

// convet all to uppperCase
console.log(names.toUpperCase());

// Includes -- true or false
console.log(names.includes("car"));

// Trim - Removes WhiteSpaces
console.log(names.trimEnd());
console.log(names.trimStart());

console.log("========================");

//1. Array Destucturing [ onFly ]

let [a, b, f, ...xyz] = [1, 2, 3, 4, 5, 6];
//   0 1 2 3 4 6
console.log(a); //
console.log(xyz);
// console.log(array[3]) // 4

//2. Object Destructuring
let person4 = { names: "Hello", age: 1 };
// 1. Dot Notion
console.log(person4.age); // 1
// 2. Bracket Notion
console.log(person4["names"]); // Hello

let { namess, ...rest } = { namess: "Hello", age: 1 };

console.log(rest);
