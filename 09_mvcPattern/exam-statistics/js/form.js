var subjectInput = document.querySelector("#subject");
var studentInput = document.querySelector("#student-name");
var gradeInput = document.querySelector("#student-grade");
var numbOfPassed = document.querySelector(".number-of-passed");
var numbOfFailed = document.querySelector(".number-of-failed");
var percentage = document.querySelector(".percentage-of-failed");
var total = document.getElementById("total");
console.log(total)
var report = new Report();

function collectAllData () {
    if (studentInput.value === "" || gradeInput.value === "") {
        return;
    }
    var subjectValue = subjectInput.options[subjectInput.selectedIndex].text;
    var studentValue = studentInput.value.split(" ");
    var gradeValue = gradeInput.value;

    var subject = new Subject(subjectValue);
    var student = new Student(studentValue[0], studentValue[1])
    var exam = new Exam(subject, student, gradeValue);
    report.addExam(exam);

    studentInput.value = "";
    gradeInput.value = "";
}

function updateStatistic () {
    numbOfPassed.textContent = report.getNumberOfPassed();
    numbOfFailed.textContent = report.getNumberOfFailed();
    percentage.textContent = report.getPercentageOfFailed();
    total.innerHTML = "Total students: " + report.getNumberOfAllStudents();

    studentInput.value = "";
    gradeInput.value = "";
}


function updateList() {

}