document.getElementById("btn").addEventListener("click", onclick);

function onclick() {
    let score = document.getElementById("score").valueAsNumber;
    let grade;

    if (score >= 97) {
        grade = 'A+';
    } else if (score >= 93) {
        grade = 'A';
    } else if (score >= 90) {
        grade = 'A-';
    } else if (score >= 87) {
        grade = 'B+';
    } else if (score >= 83) {
        grade = 'B';
    } else if (score >= 80) {
        grade = 'B-';
    } else if (score >= 77) {
        grade = 'C+';
    } else if (score >= 73) {
        grade = 'C';
    } else if (score >= 70) {
        grade = 'C-';
    } else if (score >= 67) {
        grade = 'D+';
    } else if (score >= 63) {
        grade = 'D';
    } else if (score >= 60) {
        grade = 'D-';
    } else {
        grade = 'F';
    }

    document.getElementById("grade").innerHTML = grade;
}