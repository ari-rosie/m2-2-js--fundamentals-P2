// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well

function calculateLetter(grades) {
    
    return grades.map(function(grade) {
        if (grade >= 90)
            return 'A';
        else if (grade >= 80)
            return 'B';
        else if (grade >= 70)
            return 'C';
        else if (grade >= 60)
            return 'D';
        else
            return 'F';

    });

}

const grades = [48, 95, 65, 48, 59, 78, 72, 65];
console.log(calculateLetter(grades));
