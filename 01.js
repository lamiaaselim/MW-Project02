/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1+] Download Photo From URL
  --- [2+] Resize Photo
  --- [3+] Add Logo To The Photo
  --- [4+] Show The Photo In Website
  https://jsonplaceholder.typicode.com/todos
*/


// callback => callback => callback hell => pyramid of doom
// setTimeout(() => {
//   console.log("Task 01");
//   setTimeout(() => {
//     console.log("Task 02");
//     setTimeout(() => {
//       console.log("Task 03");
//       setTimeout(() => {
//         console.log("Task 04");
//       }, 2000)
//     }, 2000)
//   }, 2000)
// }, 2000)