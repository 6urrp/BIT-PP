"use strict";

(function () {

    class Genre {
        constructor(name) {
            if (!name) {
                throw new Error ("Please, insert genre name!")
            }
            this.movieName = name;
        }
        
        getData () {
            const firstLetter = this.movieName[0];
            const lastLetter = this.movieName[this.movieName.length-1];
            return `${firstLetter}${lastLetter}`.toUpperCase();
        }
    }

    class Movie {
        constructor(title, genre, length) {
            if (!title || !genre || !length) {
                throw new Error ("All fields are required!")
            }
            if (!(genre instanceof Genre)) {
                throw new Error ("Invalid genre!")
            }
            this.title = title;
            this.genre = genre;
            this.length = length;
        }
        
        getData () {
            return `${this.title}, ${this.length} min, ${this.genre.getData()}`;
        }
    }

    class Program {
        constructor (date)  {
            if (!date) {
                throw new Error ("Invalid input!")
            }
            this.date = new Date(date);
            this.listOfMovies = [];
            this.totalNumberOfMovies = 0;
        }       
        addMovie (movie) {
            if (!(movie instanceof Movie)) {
                throw new Error ("Invalid input!")
            }
            this.listOfMovies.push(movie);
            this.totalNumberOfMovies++;
        }
        getData () {
            let result = "";
            let lengthOfMovies = 0;
            let movieData = "";
            this.listOfMovies.forEach(function (el) {
                lengthOfMovies += el.length;
                movieData += `  ${el.getData()}
                `;
            })
            return result += `${this.date.getDay()}.${this.date.getMonth()+1}.${this.date.getFullYear()}, program duration ${lengthOfMovies}
            ${movieData}`;
            // return result += this.date.getDay() + "." + (this.date.getMonth()+1) +  "." + this.date.getFullYear()  + ", program duration " +  + "\n" + movieData;
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
        this.getData = function () {
            var result = "";
            var allPrograms = "";
            this.listOfPrograms.forEach(function (el) {
                allPrograms += "\t" + el.getData();
            })
            return result += this.name + " has " + this.numberOfAllMovies + " movie titles" + "\n" + allPrograms;
        }
    }


    //object factory

    function createMovie (title, genre, length) {
        var movieGenre = new Genre(genre)
        return new Movie (title, movieGenre, length);
    }

    function createProgram(date) {
        return new Date(date);
    }





    //testing

    try {
        let genre = new Genre ("horror");
        let movie = new Movie("Wrong turn", genre, 120)
        let program = new Program("Oct 22 2021")
        program.addMovie(movie);
        
        console.log(program.getData())




        // var festival = new Festival ("The Cannes Festival");

        // var program1 = new Program("July 14 2021");
        // var program2 = new Program("July 16 2022");

        // var movie1 = createMovie("Pulp Fiction", "Crime", 154);
        // var movie2 = createMovie("The Shawdhank Redemption", "Drama", 142);
        // var movie3 = createMovie("Parasite", "Thriller", 132);
        // var movie4 = createMovie("Memento", "Mystery", 113);

        // program1.addMovie(movie1);
        // program1.addMovie(movie4);

        // program2.addMovie(movie2);
        // program2.addMovie(movie3);

        // festival.addProgram(program1);
        // festival.addProgram(program2);

        // console.log(festival)
    } catch (err) {
        console.log(err.message)
    }
})();
