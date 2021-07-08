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
            let lengthOfMovies = 0;
            let movieData = "";
            this.listOfMovies.forEach(function (el) {
                lengthOfMovies += el.length;
                movieData += 
                `   ${el.getData()}
                `;
            })
            return `${this.date.getDay()}.${this.date.getMonth()+1}.${this.date.getFullYear()}, program duration ${lengthOfMovies}
            ${movieData}`;
        }
    }

    class Festival {
        constructor (name) {
            this.name = name;
            this.listOfPrograms = [];
            this.numberOfAllMovies = 0;
        };
        addProgram (program) {
            if (!(program instanceof Program)) {
                throw new Error ("Invalid input!")
            };
            this.listOfPrograms.push(program);
            this.numberOfAllMovies++;
        };
        getData() {
            let allPrograms = "";
            this.listOfPrograms.forEach(function (el) {
                allPrograms += `${el.getData()}`;
            });
            return `${this.name} has ${this.numberOfAllMovies} movie titles
            ${allPrograms}`;
        };
    };


    //object factory

   function createMovie (title, genre, length) {
        let movieGenre = new Genre(genre)
        return new Movie (title, movieGenre, length);
    }

    function createProgram(date) {
        return new Date(date);
    }





    //testing

    try {
        let festival = new Festival ("The Cannes Festival");

        let program1 = new Program("July 14 2021");
        let program2 = new Program("July 16 2022");

        let movie1 = createMovie("Pulp Fiction", "Crime", 154);
        let movie2 = createMovie("The Shawdhank Redemption", "Drama", 142);
        let movie3 = createMovie("Parasite", "Thriller", 132);
        let movie4 = createMovie("Memento", "Mystery", 113);

        program1.addMovie(movie1);
        program1.addMovie(movie4);

        program2.addMovie(movie2);
        program2.addMovie(movie3);

        festival.addProgram(program1);
        festival.addProgram(program2);

        console.log(program2.getData())
    } catch (err) {
        console.log(err.message)
    }
})();
