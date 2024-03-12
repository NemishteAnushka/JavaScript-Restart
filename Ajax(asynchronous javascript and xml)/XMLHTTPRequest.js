const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
//step 1
// console.log(xhr.readyState)
xhr.open("GET", URL);
// console.log(xh r.readyState)
//step 2
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);

//     }
// }

//we dont need to always use onreadystatechange we can use onload
xhr.onload = function () {
  //check now in onload will call that time only when readyState === 4
  // console.log(xhr.readyState)
  const response = xhr.response; // here response is in json formate
  const data = JSON.parse(response); // here we converted it in object
  console.log(data);
};
//step 3
xhr.send();
