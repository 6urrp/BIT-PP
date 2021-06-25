function MovieFestival () {
    this.listOfAllMovies = [];
    this.listOfAllPrograms = [];
}
MovieFestival.prototype.addMovies = function (movie) {
    this.listOfAllMovies.push(movie);
}
MovieFestival.prototype.addPrograms = function (program) {
    this.listOfAllPrograms.push(program);
}



function Movie(name, length, genre){
    this.name = name;
    this.length = parseInt(length);
    this.genre = genre;
}
Movie.prototype.getData = function () {
    var abbrevation = (this.genre[0] + this.genre[this.genre.length-1]).toUpperCase();
    return this.name + ", " + this.length + "min, " + abbrevation;
}



function Program (date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}
Program.prototype.addMovie = function (movie) {
    if (!movie || !(movie instanceof Movie)){
        console.log("invalid movie input!")
    }
    this.listOfMovies.push(movie);
}
Program.prototype.totalMovies = function () {
    return this.listOfMovies.length;
}
Program.prototype.lengthOfAllMovies = function () {
    var sum = 0;
    this.listOfMovies.forEach(function (movie) {
        sum += movie.length;
    })
    return sum;
}
Program.prototype.getDate = function () {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var date = day + "." + month + "." + year;
    return date;
}
Program.prototype.getData = function() {
    var result = this.getDate();
    if(this.totalMovies() === 0) {
        result += ", Program to be announced!";
        return result;
    }
    result +=", " + this.totalMovies() + ", duration: " + this.lengthOfAllMovies() + "min."
    return result;
}


var prg = new Program("Jun 26 2022");
console.log(prg.getData());