function collectAllData (subject, name, grade) {
    var subjectInput = document.querySelector("#subject");
    var studentInput = document.querySelector("#student-name");
    var gradeInput = document.querySelector("#student-grade");

    subject = subjectInput.options[subjectInput.selectedIndex].text;
    name = studentInput.value;
    grade = gradeInput.value;

    console.log(subject, name, grade);
}

var button = document.querySelector