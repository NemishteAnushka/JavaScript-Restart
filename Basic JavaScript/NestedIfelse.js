//nested if else

let winingNumber = 23;
let userGuess = Number(prompt("Guess a number"));

if(userGuess === winingNumber){
    console.log("Your Guess is Right");
}
else{
    if(userGuess < winingNumber){
        console.log("Too Low !!!");
    }
    else{
        console.log("Too High !!!");
    }
}