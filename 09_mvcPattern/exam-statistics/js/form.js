function collectAllData (report) {
    var subjectInput = document.querySelector("#subject");
    var studentInput = document.querySelector("#student-name");
    var gradeInput = document.querySelector("#student-grade");

    var subjectValue = subjectInput.options[subjectInput.selectedIndex].text;
    var studentValue = studentInput.value.split(" ");
    var gradeValue = gradeInput.value;

    var subject = new Subject(subjectValue);
    var student = new Student(studentValue[0], studentValue[1])
    var exam = new Exam(subject, student, gradeValue);
    
    report.addExam(exam);
}

function updateStatistic (report) {
    var numbOfPassed = document.querySelector(".number-of-passed");
    var numbOfFailed = document.querySelector(".number-of-failed");
    var percentage = document.querySelector(".percentage-of-failed");

    numbOfPassed.textContent = report.getNumberOfPassed();
    numbOfFailed.textContent = report.getNumberOfFailed();
    percentage.textContent = report.getPercentageOfFailed();
}


function updateList() {

}