/*
  Promise
  - All
  - All Settled
  - Race
*/

let myPromiseFirst = new Promise((resolveFn, rejectFn) => {
  setTimeout(() => {
    resolveFn('01 Promise Resolved')
  }, 5000)
})

let myPromiseSecond = new Promise((resolveFn, rejectFn) => {
  setTimeout(() => {
    resolveFn('02 Promise resolved')
  }, 2000)
})

let myPromiseThird = new Promise((resolveFn, rejectFn) => {
  setTimeout(() => {
    rejectFn('03 Promise rejected')
  }, 6000)
})



// Promise.all([myPromiseFirst, myPromiseSecond, myPromiseThird])
//   .then((resValue) => {
//     console.log('Promise.all =>', resValue)
//   },
//     (rejValue) => {
//       console.log('Promise.all =>', rejValue)
//     }
//   )
// Promise.allSettled([myPromiseFirst, myPromiseSecond, myPromiseThird])
//   .then((resValue) => {
//     console.log('Promise.all =>', resValue)
//   },
//     (rejValue) => {
//       console.log('Promise.all =>', rejValue)
//     }
//   )
// Promise.race([myPromiseFirst, myPromiseSecond, myPromiseThird])
//   .then((resValue) => {
//     console.log('Promise.all =>', resValue)
//   },
//     (rejValue) => {
//       console.log('Promise.all =>', rejValue)
//     }
//   )