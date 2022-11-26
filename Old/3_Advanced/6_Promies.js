/*

- Promise Status
--- Pending: Initial State
--- Fulfilled: Completed Successfully
--- Rejected: Failed

- Then
--- Takes 2 Optional Arguments [Callback For Success Or Failure]

words:
  resolve
  rejected
  Pending
  Fulfilled
  approved
  denied

Then    => Promise Is Successfull Use The Resolved Data
Catch   => Promise Is Failed, Catch The Error
Finally => Promise Successfull Or Failed Finally Do Something

Promise
- All
- All Settled
- Race

- Async Before Function Mean This Function Return A Promise
- Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// let promise = new Promise((resolve, rejected) => {
//   // let conn = true;
//   let conn = false;
//   if (conn) {
//     resolve("Connection is true");
//   } else {
//     rejected("Connection is false");
//   }
// });

// console.log(promise);

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

// ================================================

// let approved = (x) => {
//   console.log(x);
// };
// let denied = (y) => {
//   console.log(y);
// };
// let checkConnection = (con) => {
//   return new Promise((resolve, reject) => {
//     if (con) {
//       resolve("The database has been connected");
//     }
//     reject("Sorry, the connection failed");
//   });
// };
// checkConnection(false).then(approved, denied);

//===================================================

// const connection = new Promise((resolve, rejected) => {
//   let check = false;
//   if (check) {
//     resolve("The connection is successfuly");
//   } else {
//     rejected("The connection is failed");
//   }
// });

// connection
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   })
//   .finally(() => {
//     console.log("Finshed");
//   });

//===================================================

// const getData = (apiLink) => {
//   return new Promise((resolve, rejected) => {
//     let async = new XMLHttpRequest();
//     async.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         rejected("Not Found Data!");
//       }
//     };
//     async.open("GET", apiLink);
//     async.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos").then(
//   (Data) => {}
// );

// ===================================================

// function promise(bool) {
//   return new Promise((resolve, rejected) => {
//     const con = bool;
//     if (con) {
//       resolve("Connected");
//     } else {
//       rejected("Not Connection");
//     }
//   });
// }

// async function promise(bool) {
//   const con = bool;
//   if (con) {
//     return "Connected";
//   } else {
//     return "Not Connected";
//     // throw new Error("Not Connected");
//   }
// }

// console.log(promise(false));

// promise(false)
//   .then((resolveValue) => {
//     console.log(resolveValue);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

// ==================================================
