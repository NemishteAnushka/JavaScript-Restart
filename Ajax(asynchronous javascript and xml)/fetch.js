//get data
const URL = "https://jsonplaceholder.typicode.com/posts";
// const fetchApi = fetch(URL); // gives promise
fetch(URL)
.then(response=>{
    if(response.ok){
        return response.json()  // returns promise data by parsing with json
    }else{
        throw new Error("Something went wrong");
    }
   
})
.then(data=>{
    console.log(data)
})
.catch(error =>{
    alert(error)
})