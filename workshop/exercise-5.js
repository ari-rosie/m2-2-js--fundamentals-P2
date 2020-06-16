// Q5
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

function itemIsPresent(array, item) {
  if (array.indexOf(item) >= 0)
    return true;
  else
    return false;
}

// Test case
const myArray = [
  'bacon',
  'purple',
  'door',
  'window',
  'exist',
  'code',
  'program',
  'funky',
];

console.log(itemIsPresent(myArray, 'funky')); // true
console.log(itemIsPresent(myArray, 'elephant')); // false
