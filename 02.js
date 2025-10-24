/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure] chain 
*/


let myPromise = new Promise((resolveFn, rejectFn) => {
  let connectToDatabase = true;
  if (connectToDatabase) {
    resolveFn("You Are Connected");
  } else {
    rejectFn("Connection Failed");
  }
})
  .then(
    (resolvedValue) => { console.log(`Good, ${resolvedValue}`); },
    (rejectedValue) => { console.log(`Bad, ${rejectedValue}`); }
  )
  .then(
    (resolvedValue) => { console.log(`Good 02, ${resolvedValue}`); },
    (rejectedValue) => { console.log(`Bad, ${rejectedValue}`); }
  )
  .then(
    (resolvedValue) => { console.log(`Good 03, ${resolvedValue}`); },
    (rejectedValue) => { console.log(`Bad, ${rejectedValue}`); }
  )
  .then(
    (resolvedValue) => { console.log(`Good04, ${resolvedValue}`); },
    (rejectedValue) => { console.log(`Bad, ${rejectedValue}`); }
  )
console.log(myPromise);