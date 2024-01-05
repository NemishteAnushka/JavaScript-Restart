// Create an object named student with properties name, age, and grade.
const student = {
    name:"Anushka Nemishte",
    age:21,
    grade:95
}
console.log("student",student);

//Update the age property of the student object to reflect a birthday.
student.age = student.age+1;
console.log("student age",student.age);

// Create another object named anotherStudent with the same properties as the student object. Check if they are equal.
const anotherStudent = {
   ...student
}

console.log(student===anotherStudent);

