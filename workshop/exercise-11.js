// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
    const nGrade = grades.length;
    let total = 0;
    
    grades.forEach(function(grade) {
        total += grade;
    })

    return Math.round(total / nGrade);
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
