// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q6
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.
function removeEvens(lst) {
  // lst is an array of strings
  return lst.filter(function(num) {
    return num % 2 != 0;
  })
}
// -------------------------------------------------------------------------
console.log('Q4 removeEvens()', removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
