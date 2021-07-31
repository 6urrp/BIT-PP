var button = document.querySelector("#add-button");

var handler = function(e) {
    collectAllData();
    updateStatistic();

    e.preventDefault();
}

button.addEventListener("click", handler)