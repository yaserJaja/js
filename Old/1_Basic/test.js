//

// function promise() {
//   return new Promise((resolve, reject) => {
//     if (true) resolve("Hi I'm Resolve")
//     reject("Hi I'm Reject")
//   });
// }
// async function promise() {
//   if (false) return "Hi I'm Resolve"
//   throw new Error ('Hi Iam Reject')
// }
// promise()
// .then((fulfilled) => {
//   console.log(fulfilled)
// })
// .catch((rejected) => {
//   console.log(rejected)
// })

async function fetchData(url) {
  let response = await fetch(url);
  data = await response.json();
  return data;
}

function getPosts(callback) {
  setTimeout(() => {
    callback(
      [
        { id: 1, title: "title-1", body: "body-1" },
        { id: 2, title: "title-2", body: "body-2" },
        { id: 3, title: "title-3", body: "body-3" },
      ],
      null
    );
  });
}
function getIdPost(callback) {
  setTimeout(() => {
    callback({ id: 1 }, null);
  });
}
function getPost(callback) {
  setTimeout(() => {
    callback({ id: 1, title: "title-1", body: "body-1" }, null);
  });
}
function getPostHandlerCallback(post, error) {
  if (error) throw error;
  console.log(post);
}
function getIdPostHandlerCallback(id, error) {
  if (error) throw error;
  console.log(id);
  getPost(getPostHandlerCallback);
}
function getPostsHandlerCallback(posts, error) {
  if (error) throw error;
  console.log(posts);
  getIdPost(getIdPostHandlerCallback);
}
getPosts(getPostsHandlerCallback);

// function Calc(num1, num2) {
//   this.num1 = num1;
//   this.num2 = num2;
//   sum = function () { return this.num1 + this.num2}
// }

// Calc.prototype.sum = function () {
//   return this.num1 + this.num2;
// }

// class Calc {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   sum() {
//     return this.num1 + this.num2;
//   }
// }

// const x = new Calc(1, 2);
// console.log(x.sum());

// // let h1 = document.getElementById("title1")
// // let h2 = document.getElementById("title2")
// // let h3 = document.getElementById("title3")
// // let h4 = document.getElementById("title4")

// // new Promise((resolve, reject) => {
// //   setTimeout( _ => {
// //     h1.style.visibility = 'visible'
// //     resolve()
// //   }, 1000)
// // }).then( _ => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout( _ => {
// //       h2.style.visibility = 'visible'
// //       resolve()
// //     }, 1000)
// //   })
// // }).then( _ => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout( _ => {
// //       h3.style.visibility = 'visible'
// //       resolve()
// //     }, 1000)
// //   })
// // }).then( _ => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout( _ => {
// //       h4.style.visibility = 'visible'
// //       reject()
// //     }, 1000)
// //   })
// // }).catch(error => error)
