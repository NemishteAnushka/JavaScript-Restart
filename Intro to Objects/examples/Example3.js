//Add a property hobby to the student object. Delete this property.
const student = {
    name:"Anushka Nemishte",
    age:21,
    grade:95,
    hobby:'Dance'
}
console.log("student",student);

delete student.hobby;
console.log('delete hobby in student',student);