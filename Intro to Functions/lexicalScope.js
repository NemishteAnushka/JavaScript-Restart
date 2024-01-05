//lexical scope


function myapp(){
    const myname = "Annuu";
    console.log("inside myapp",myname);
    const insideMyAPP2Func = ()=>{
        console.log("inside my app function ",myname);
    }
    insideMyAPP2Func()
}
myapp()