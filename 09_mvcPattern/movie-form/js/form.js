var title = document.getElementById("movie-title");
var length = document.getElementById("movie-length")
var genre = document.getElementById("movie-genre")
var movieButton = document.querySelector(".movie-form form .button")
var movieParagraph = document.querySelector(".create-movie")
var errorText = document.querySelector(".error-text")
var date = document.getElementById("program-date");
var programList = document.querySelector(".create-program")
var programButton = document.getElementById("program-button")
var programSelect = document.getElementById("program-select")
var errorDate = document.querySelector(".error-date")
var movieSelect = document.getElementById("movie-select")
var movieToProgram = document.getElementById("movie-program");
console.log(errorDate)

var festival = new MovieFestival();

function createMovie () {
    var movieValue = title.value;
    var lengthValue = length.value;
    var genreValue = genre.options[genre.selectedIndex].text;

    var movie = new Movie(movieValue, lengthValue, genreValue);
    festival.addMovies(movie);
    var index = festival.listOfAllMovies.length - 1;

    if (movieValue === "" || lengthValue === "" || genre.selectedIndex === 0) {
        errorText.innerText = "All input fields are required!";
        return;
    }
    errorText.innerText = "";

    var li = document.createElement("li")
    li.innerText = movie.getData();
    movieParagraph.appendChild(li);

    var option = document.createElement("option");
    option.innerHTML = movie.getData();
    option.setAttribute("value", index);
    movieSelect.appendChild(option);
    
    title.value = "";
    length.value = "";
    genre.selectedIndex = 0;
}

movieButton.addEventListener("click", createMovie);



function createProgram() {
    if(!date.value) {
        errorDate.innerText = "Date required!";
        return;
    }
    
    var inputDate = new Date(date.value);
   
    if (inputDate.getTime() < Date.now()) {
        errorDate.innerText = "Invalid date input!";
        return;
    }
    errorDate.innerText = "";

    var program = new Program(inputDate);
    festival.addPrograms(program);
    var index = festival.listOfAllPrograms.length - 1;

    var li = document.createElement("li")
    li.innerText = program.getData();
    li.setAttribute("id", "item-" + index)
    programList.appendChild(li);

    var option = document.createElement("option")
    option.innerText = program.getDate();
    option.setAttribute("value", index);
    programSelect.appendChild(option);

    date.value = "";
}

programButton.addEventListener("click", createProgram);

function addMovieToProgram() {
    var movieInput = movieSelect.value;
    var programInput = programSelect.value;
    console.log(movieInput);
    console.log(programInput);

    var movie = festival.listOfAllMovies[movieInput];
    var program = festival.listOfAllPrograms[programInput];
    
    program.addMovie(movie);

    var liNode = document.querySelector("#item-" + programInput);
    liNode.innerText = program.getData();
    
    movieSelect.value = "";
    programSelect.value = "";
}

movieToProgram.addEventListener("click", addMovieToProgram)



