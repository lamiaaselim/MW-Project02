/*
  Promise Practice

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/


let myPromise = new Promise((resFn, rejFn) => {
  let employees = ["Ahmed", "Sayed", "Sameh", "Gamal"];
  if (employees.length === 4) {
    resFn(employees)
  } else {
    rejFn(Error("No One Came"))
  }
})
  .then(
    (resValue) => {
      resValue.length = 2;
      return resValue;
    }
  )
  .then(
    (resValue) => {
      resValue.length = 1;
      return resValue
    }
  )
  .then(
    (resValue) => console.log(resValue),
  ).catch((err) => console.log(err))
  .finally(() => { console.log("Done") })
