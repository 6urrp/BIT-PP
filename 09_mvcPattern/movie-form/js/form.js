var title = document.getElementById("movie-title");
var length = document.getElementById("movie-length")
var genre = document.getElementById("movie-genre")
var movieButton = document.querySelector(".movie-form form .button")
var movieParagraph = document.querySelector(".create-movie")
var errorText = document.querySelector(".error-text")

console.log(errorText);


console.log(movieButton);

movieButton.addEventListener("click", function createMovie (e) {
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
    }
    

    title.value = "";
    length.value = "";
    genre.selectedIndex = 0;

})

