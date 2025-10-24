/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/


fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    let myData = data.json();
    return myData;
  })
  .then((data) => {
    data.length = 10;
    return data;
  })
  .then((data) => {
    data.length = 5;
    return data;
  })
  .then((data) => {
    console.log(data);
  })