const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET",URL);

xhr.onload = function(){
    if(xhr.status === 200){
        const response = JSON.parse(xhr.response);
        // console.log(response)
        //URL for getbyid
        const id = response[3].id; // 4th id
        const xhr2 = new XMLHttpRequest()
        const URLgetById = `${URL}/${id}`;
        xhr2.open("GET",URLgetById)
        xhr2.onload = ()=>{
            const result = xhr2.response;
            console.log(result)
        }
        xhr2.send()
    }else{
        console.log("data error ")
    }
}

//error handling for network error
xhr.onerror = ()=>{
    console.log("network error")
}
xhr.send()