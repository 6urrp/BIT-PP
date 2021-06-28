function Report () {
    this.date = new Date();
    this.listOfExams = [];
    this.listOfSubjects = ["JavaScript", "Web", "Python"];
}
Report.prototype.addExam = function (exam) {
    this.listOfExams.push(exam);
}
Report.prototype.getTotalExams = function () {
    return this.listOfExams.length;
}
Report.prototype.getNumberOfPassed = function () {
    var counter = 0;
    this.listOfExams.forEach(function(exam) {
        if (exam.hasPassed()) {
            counter++;
        }
    })
    return counter;
}
Report.prototype.getNumberOfFailed = function () {
    var counter = 0;
    this.listOfExams.forEach(function (exam) {
        if (!exam.hasPassed()) {
            counter++;
        }
    })
    return counter;
}
Report.prototype.getPercentageOfFailed = function () {
    var passed = this.getNumberOfPassed();
    var failed = this.getNumberOfFailed();
    var percentage = (passed + failed) / failed;
    if (failed !== 0) {
        return percentage;
    }
    return;
    
}