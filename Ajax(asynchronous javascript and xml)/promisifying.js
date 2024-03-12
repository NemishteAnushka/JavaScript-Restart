console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";
function sendRequest(method,url){
return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method,url)
    xhr.onload = ()=>{
       if(xhr.status === 200){
        resolve(xhr.response);
       }else{
        reject("Something went wrong")
       }
        
    }
    xhr.send()
})
}

sendRequest("GET", URL)
.then((result)=>{
    const data = JSON.parse(result);
    return data
})
.then((result2)=>{
    const id = result2[3].id
    const getById = `${URL}/${id}`;
    return sendRequest("GET",getById)
})
.then((data)=>{
    const parseData = JSON.parse(data);
    console.log(parseData)
})
.catch((error)=>{
    alert(error)
})