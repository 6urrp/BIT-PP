var button = document.querySelector("#add-button");

var report = new Report()

function pressButton() {
    collectAllData(report);
    updateStatistic(report);
}

//button.addEventListener("click", pressButton)