var title = document.getElementById("movie-title");
var length = document.getElementById("movie-length")
var genre = document.getElementById("movie-genre")
var movieButton = document.querySelector(".movie-form form .button")
var movieParagraph = document.querySelector(".create-movie")
var errorText = document.querySelector(".error-text")
var date = document.getElementById("program-date");
var programButton = document.getElementById("program-button")
var programSelect = document.getElementById("program-select")
var errorDate = document.querySelector(".error-date")
var movieSelect = document.getElementById("movie-select")


movieButton.addEventListener("click", function createMovie () {
    var movieValue = title.value;
    var lengthValue = length.value;
    var genreValue = genre.options[genre.selectedIndex].text;

    var movie = new Movie(movieValue, lengthValue, genreValue);
    if (movieValue === "" || lengthValue === "" || genre.selectedIndex === 0) {
        errorText.innerText = "All input fields are required!"
    } else {
        errorText.innerText = ""
        var li = document.createElement("li")
        li.innerText = movie.getData();
        movieParagraph.appendChild(li);
        var option = document.createElement("option");
        option.innerHTML = movie.getData();
        movieSelect.appendChild(option);
    }
    

    title.value = "";
    length.value = "";
    genre.selectedIndex = 0;

})

programButton.addEventListener("click", function createProgram() {
    var inputDate = new Program(date.value);

    if (date.value === "") {
        errorDate.innerText = "Invalid date!"
    } else {
        errorDate.innerText = "";
        var option = document.createElement("option")
        option.innerText = inputDate.getData();
        programSelect.appendChild(option);
    }
    date.value = "";
})



