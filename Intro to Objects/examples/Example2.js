//Create an array of student objects, each representing a different student. Loop through the array and print their names.

const students = [
    {name:"Anushka",age:21,marks:85},
    {name:"Anuja",age:17,marks:96},
    {name:"Riya",age:21,marks:78}
]
console.log("students",students);

for(let student of students){
    console.log(student.name);
}