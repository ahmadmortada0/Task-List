//Question 1
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];

function generateReports(students) { //The time compelixty of this program is O(n^2)
    let studentsGrades = [];
    for (let i = 0; i < students.length; i++) {//O(n)
        let student = { name: students[i].name };
        let avgScore = 0;
        let scores = students[i].scores;

        for (let j = 0; j < scores.length; j++) {//O(1)
            avgScore += scores[j];
        }

        avgScore = avgScore / scores.length;

        let grade = '';
        if (avgScore >= 90) {
            grade = "A";
        } else if (avgScore >= 80) {
            grade = "B";
        } else if (avgScore >= 70) {
            grade = "C";
        } else if (avgScore >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        student.Score = avgScore;
        student.grade = grade;

        studentsGrades.push(student);
    }

    return studentsGrades;
}

console.log(generateReports(students));


//Question2
// class BankAccount{}

