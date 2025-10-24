/*
  Promise And XHR
  then  
  catch 
  finally
*/


const getData = (apiLink) => {
  return new Promise((resolveFn, rejectFn) => {
    let req = new XMLHttpRequest();
    req.onload = function () {
      if (req.status === 200 && req.readyState === 4) {
        resolveFn(JSON.parse(req.responseText));
      } else {
        rejectFn(Error('Something went wrong'));
      }
    }
    req.open('GET', apiLink)
    req.send();
  })
}

getData('https://jsonplaceholder.typicode.com/posts')
  .then(
    (data) => {
      data.length = 10;
      return data;
      // console.log(data);
    }
  )
  .then(
    (firstTen) => {
      firstTen.length = 5;
      return firstTen;
      // console.log(firstTen);
    }
  )
  .then(
    (firstTen) => {
      // return firstTen[0];
      console.log(firstTen[0]);
    }
  )
  .catch((err) => {
    console.log("catch Error .... " + err);
  }).finally(() => {
    console.log("Finally called .... ");
  })
// getData('https://jsonplaceholder.typicode.com/comments')