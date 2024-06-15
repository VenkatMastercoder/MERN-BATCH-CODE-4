// Promises

const { METHODS } = require("http");

/***
 * JS
 * - CODE EXE
 *  - Synchronous Execution [ Js Default ]
 *    - Line by Line
 *
 *  - Asynchronous Execution
 *    - if the execution takes some time then the ExeCution is Call Asynchronous Exe
 *    - Promise
 *      - States
 *        - pending
 *        - Fulfilled
 *        - Rejected
 */
// Make an API Call Provided by Bro API
const response = fetch("https://baconipsum.com/api/?type=all"); // Asy : 1 min
// Promise - Pending ==> - Fulfilled : then()
//       ==> - Rejected  : catch()

// response
//   .then((response) => {
//     return response.json();  // Asy : 1 min
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/***
 * HOW TO HANDLE Promise
 * 1. OLD WAY [ Before ES6 ]
 *    then() , catch()
 * 2. NEW WAY [ After ES6 ]
 *    Async , Await
 *  */

async function data() {
  try {
    // Get
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/"); // Asy : 1 min
    const data = await response.json(); // Asy : 1 min
    console.log(data);

    // Post
    const option = {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    };

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      option
    );
    const data2 = await response2.json();
    console.log(data2);

    // put
    const option3 = {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    };
    const response3 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      option3
    );
    const data3 = await response3.json();
    console.log(data3);

    const option4 = {
      method: "DELETE",
    };

    const response4 = await fetch("https://jsonplaceholder.typicode.com/posts/1", option4)
    console.log(await response4.json());
  } catch (e) {
    console.log(e);
  }
}

data();
