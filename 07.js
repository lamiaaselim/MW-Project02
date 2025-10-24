/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((resolveFn, rejectFn) => {
//     let users = [];
//     if (users.length > 0) {
//       resolveFn('Data Found')
//     } else {
//       rejectFn('No Data Found')
//     }
//   })
// }
async function getData() {
  let users = [];
  if (users.length > 0) {
    return ('Data Found')
  } else {
    return ('No Data Found')
  }
}
getData().then(
  (resValue) => {
    console.log('Then =>', resValue)
  },
  (rejValue) => {
    console.log('Catch =>', rejValue)
  }
)