const colors = ['red', 'green', 'blue'];
console.log(colors);
// Remove the second color ('green') from the array
colors.splice(1,1);
//The splice method takes two arguments: the starting index and the number of elements to remove. In this case, it starts at index 1 (the second element, 'green') and removes 1 element. After this operation, the colors array will be ['red', 'blue'].
console.log(colors);