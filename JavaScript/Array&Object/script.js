// Array - Holds a  Ordered Sequence of items - [ number , string , Bol , null ]
/**
 * 1. How to Create a Array
 *    - let arr = [1,2,3,4]
 *
 * 2. How to Accessing a Element in Array
 *    - By index [ 0 to x]
 *    - number[3]
 *
 * 3. How to Modifying an Array Items
 *    - number[3] = "Hi"
 *
 * 4. How to Count the No of Element in an Array
 *    - length : [ 1 to X]
 *    - number.length
 *
 * 5. How Add an Element in array
 *    - push()
 *    - number.push("Hello");
 *    Note : always Push Method will Add Element at last
 *
 * 6. How to Remove the Element in Array
 *    - pop()
 *    Note : always Push Method will removes Element at last
 */
let number = [1, 2, true, "Hello", null];
//  0  1   2      3        4
console.log("Before:", number[2]); // "Hello"
number[2] = false;
console.log("After:", number[2]); // "hi"
console.log(number.length);
console.log("=============");
number.push("Hello");
number.pop();
number.pop();
console.log(number);

console.log("----------------Object----------------");

/**
 * Object - A Object is a Collection of Properties
 * {Key:Value}
 * - Properties
 *   ==> Key : unique
 *   ==> value : Anything
 *
 * 1. How to Create an Object
 * - let person = { age: "1" };
 *
 * 2. How to Access an Object
 * - Dot Notation : person.lastNam
 * - Braket Notation : person["firstName"]
 *
 * 3. How to Modify an Object
 * - Dot Notation : person.age = 2;
 * - Braket Notation : person["firstName"] = "sri";
 *
 * 4. How to Added an Property in a Object
 * - Dot Notation :
 * - Braket Notation :
 */

/**
 * Identifiers : Set of Rules naming the Variables
 *
 * firstName - ✅
 * $firstName - ✅
 * _firstName - ✅
 * firstName12 - ✅
 *
 * first Name - ❌
 * 12firstName - ❌
 *
 */

let person = {
  firstName: "Venkat",
  lastName: "g",
  age: "1",
};

// Dot Notation
console.log(person.lastName);

// Braket Notation
console.log(person["firstName"]);

// Modifying using Dot Notation
person.age = 2;

// Modifying using Braket Notation
person["firstName"] = "sri";

console.log(person.gender);
// undefinded

// Adding an Property to Object uisng Dot Notation
person.gender = "ikf";

// Adding an Property to Object uisng Braket Notation
person["number"] = 9876543210;

console.log(person);

console.log("----------***--------");

let arr = [1, "Hello", true, null];
// value =
let obj = {
  number: 1,
  names: "Sam",
  habit: true,
  no: null,
  habits: ["Singing", "Playing Chess Game"],
  car: {
    name: "Audi",
    model: "A5",
    color: "White",
  },
  run: function () {
    console.log("Person is Runing");
  },
};

console.log(obj.names);
console.log(obj.habits[1]);
console.log(obj.car.model);
console.log(obj.run());

function add(a, b) {
  return a + b;
}

const ans = add(10, 10);
console.log(ans);

const addMethod = (a, b) => {
  return a + b;
};

const anss = addMethod(10, 20);
console.log(anss);