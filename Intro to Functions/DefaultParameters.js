//default parameters

//without default parameters

// function greet(name){
//     if(!name){
//         name="Guest"
//     }
//     console.log(`Hello , ${name} !`)
// }
// greet();
// greet("Anushka");


//with default Parameters

function greet(name="Guest"){
    console.log(`Hello , ${name} !`);
}
greet();
greet("Anushka");