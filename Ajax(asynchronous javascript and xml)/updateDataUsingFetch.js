const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(`${URL}/1`,{
    method:"PUT",
    body:JSON.stringify({
        id:1,
        title:"This is new Title for id 1",
        body:"This is new body for id 1",
        userId:1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(response=>{
    return response.json()
})
.then(json=>{
    console.log(json)
})