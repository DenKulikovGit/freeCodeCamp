// DESCRIPTION:
// Now the teacher needs your help converting the student score to a letter grade.
// Complete the getGrade function that takes a number score as a parameter.
// Your function should return a string representing a letter grade based on the score.
// Here are the scores and their corresponding letter grades:
// Score Range	Grade
// 100	"A++"
// 90 - 99	"A"
// 80 - 89	"B"
// 70 - 79	"C"
// 60 - 69	"D"
// 0 - 59	"F"
// Tips
// Remember that you learned about conditional statements (if, else if, and else).
// Remember that you learned about comparison operators (>, <, >=, <=, ===).

// SOLUTION:
function getGrade(score) {
    if (score === 100) {
        return 'A++';
    } else if (score >= 90 && score <= 99) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));