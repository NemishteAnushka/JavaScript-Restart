function myPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const value = true;
            if(value){
                resolve("value is present")
            }else{
                reject("value is not present")
            }
        }, 2000);
    })
}

myPromise().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})