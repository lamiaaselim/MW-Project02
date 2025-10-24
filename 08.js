/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/
// let myPromise = new Promise((resolveFn, rejectFn) => {
//   setTimeout(() => {
//     resolveFn('Promise resolved')
//   }, 2000)
// })
let myPromise = new Promise((resolveFn, rejectFn) => {
  setTimeout(() => {
    rejectFn('Promise rejected')
  }, 2000)
})

// async function readData() {
//   console.log("Before Promise");
//   // myPromise.then(value => console.log(value))
//   console.log(await myPromise.then(value => value));
//   console.log("After Promise");
// }
async function readData() {
  console.log("Before Promise");
  // myPromise.then(value => console.log(value))
  console.log(await myPromise.catch(err => err));
  console.log("After Promise");
}

readData()