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

    function Program (date, total) {
        if (!date || !total) {
            throw new Error ("Invalid input!")
        }
        this.date = new Date (date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = total;
    }

    function Festival (name, number) { //numbre of movies in all programs
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfAllMovies = number;
    }


    //testing

    try {
        var genree = new Genre ("horor");
        var movie = new Movie ("Friday the 13th",genree, 96)
        console.log(movie.getData());
    } catch (err) {
        console.log(err.message)
    }
})();
