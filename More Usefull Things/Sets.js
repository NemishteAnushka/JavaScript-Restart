// sets (it is iterable)
//store data
//sets also have its own methods
//no index-based access
//order is not guaranteed
//unique items only (no duplicates allowed)

//set declaration
// const numbers = new Set([1,2,3,4]);
// console.log(numbers);

//set.add
const items = ["items 1", "items 2", "items 3"];
const numbers = new Set();
numbers.add(0);
numbers.add(1);
numbers.add(5);
numbers.add(9);
numbers.add(6);
numbers.add(3);
numbers.add(2);
numbers.add(items);
//has() to check wheather that value is present or not
if (numbers.has(0)) {
  console.log("0 is present");
} else {
  console.log("0 is absent");
}
console.log(numbers);

for(let num of numbers){
    console.log(num);
}

//extract unique elements from array

const myArr = [1,2,5,8,9,5,4,9,8];
const uniqueArr = new Set(myArr);
console.log(uniqueArr.size);

const mySet = new Set();
mySet.add(1);
mySet.add("anushka");
mySet.add({key:"value"});

console.log(mySet);

//remove specif element from set use delete

const newSet = new Set([1,2,5,8]);
newSet.delete(5);
console.log(newSet);

//remove all elements use clear

newSet.clear();
console.log(newSet);
