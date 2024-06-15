/**
 * function
 *  - arg
 *    - number,string,bool,null,array,object
 *    - function [ callback ]
 *
 * 1. CallBack function
 *  - a function that is passed as an argument to another function
 *    - function
 *      - normal function
 *      - arrow function
 *
 * 2. Schedulers
 *  - The Schedulers are used to Schedule the execution of the callback function
 *
 * - setInterval
 *    Syntax - setInterval(callback,time)
 * 
 * - clearInterval

 * - setTimeout

Note = time : milliSeconds [ 1sec = 1000 mill]
 *
 * */

// para

function add(a) {
  console.log(a);
}

add(function b() {
  console.log("b");
});

const dis = () => {
  console.log("dis function");
};

add(dis);

add(function a() {
  console.log("From a");
});

add(function display() {
  console.log("Hello");
}); // argument

// - The Schedulers are used to Schedule the execution of the callback function
let counter = 0;

const id = setInterval(function () {
  console.log(counter);
  counter = counter + 1;
}, 1000);

clearInterval(id)

const uid = setTimeout(function(){
  console.log("Hello")
},2000)

clearTimeout(uid)