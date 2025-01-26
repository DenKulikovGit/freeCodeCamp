// DESCRIPTION:
// A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.
// Complete the getAverage function which takes in an array of test scores and returns the average score.
//     The average is calculated by adding up all the scores and dividing by the total number of scores.
//     Example Code
// average = sum of all scores / total number of scores
// A couple of function calls have been provided for you so you can test out your code.
//     Tips
// You can use a loop to iterate over the scores array and add up all the scores.
//     You can use the length property to get the total number of scores.

// SOLUTION:
function getAverage(scores) {
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
    }
    return totalScore / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));