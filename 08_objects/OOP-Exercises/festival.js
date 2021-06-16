"use strict";

(function () {

    function Genre (name) {
        if (!name) {
            throw new Error ("Please, insert genre name!")
        }
        this.name = name;
        this.getData = function () {
            return (this.name[0] + this.name[name.length-1]).toUpperCase();
        }
    }

    function Movie (title, genre, length) {
        if (!title || !genre || !length) {
            throw new Error ("All fields are required!")
        }
        if (!(genre instanceof Genre)) {
            throw new Error ("Invalid genre!")
        }
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            return this.title + ", " + this.length + "min, " + this.genre.getData();
        }
    }

    function Program (date) {
        if (!date) {
            throw new Error ("Invalid input!")
        }
        this.date = new Date (date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = 0;
        this.addMovie = function (movie) {
            if (!(movie instanceof Movie)) {
                throw new Error ("Invalid input!")
            }
            this.listOfMovies.push(movie);
            this.totalNumberOfMovies++;
        }
        this.getData = function () {
            var result = "";
            var lengthOfMovies = 0;
            var movieData = "";
            this.listOfMovies.forEach(function (el) {
                lengthOfMovies += el.length;
                movieData += "\t" + el.getData() + "\n";
            })
            return result += this.date.getDay() + "." + (this.date.getMonth()+1) +  "." + this.date.getFullYear()  + ", program length " + lengthOfMovies + "\n" + movieData;
        }
    }

    function Festival (name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfAllMovies = 0;
        this.addProgram = function (program) {
            if (!(program instanceof Program)) {
                throw new Error ("Invalid input!")
            }
            this.listOfPrograms.push(program);
            this.numberOfAllMovies++;
        }
    }


    //testing

    try {
        var genree = new Genre ("horor");
        var movie = new Movie ("Friday the 13th",genree, 96)
        var program = new Program ("Oct 26 2020")
        var festival = new Festival ("Venice Film Festival")
        program.addMovie(movie);
        festival.addProgram(program)
        console.log(program.getData());
    } catch (err) {
        console.log(err.message)
    }
})();
