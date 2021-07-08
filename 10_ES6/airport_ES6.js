"use strict";

(function () {

    class Person {
        constructor(name, surname) {
            if (!name || !surname) {
                throw new Error("Please insert your name and surname!");
            }
            this.firstname = name;
            this.lastname = surname;
            
        }
        getData () {
            return `${this.firstname} ${this.lastname}`;
        }  
    }

    class Seat {
        constructor(number = (parseInt(((100 - 10) * Math.random()) + 10)), ctgr = "e") {
            if (typeof number !== "number") {
                throw new Error ("Your entry must be in the form of numbers");
            };
            this.seatNumber = number;
            if (!['e', 'b'].includes(ctgr)) {
                throw new Error('Invalid input!') 
            };
            this.seatCategory = ctgr;    
        }
        getData () {
            return `${this.seatNumber}, ${this.seatCategory.toUpperCase()}`;
    } 

    }

    class Passenger {
        constructor (person, seat) {
            if (!person || !(person instanceof Person)) {
                throw new Error("Invalid input!");
            };
            if (!seat || !(seat instanceof Seat)) {
                throw new Error("Invalid input!");
            };
            this.person = person;
            this.seat = seat;
        }
        getData () {
            return `${this.seat.getData()}, ${this.person.getData()}`;
        }
    }

    class Flight {
        constructor (rel, date) {
            if (!rel || !date) {
                throw new Error ("Please fill in all fields!");
            };
            this.relation = rel;
            this.date = new Date(date);
            this.passengers = [];
        }
        addPassenger (passenger) {
            if (!passenger || !(passenger instanceof Passenger)) {
                throw new Error ("Invalid input!");
            }
            this.passengers.push(passenger);
        };
        getData() {
            let result = "";
            let day = this.date.getDate();
            let month = this.date.getMonth() + 1; //ide od 0-11
            let year = this.date.getFullYear();
            result += `  ${day}.${month}.${year}, ${this.relation}
            `;
            this.passengers.forEach(function (pass) {
                result += `   ${pass.getData()}
                `;
            })
            return result; 
        }
        //method that helps us get the number of passengers
        numberOfPassengers () {
            return this.passengers.length;
        }
    }

    class Airport {
        constructor() {
            this.name = "Nikola Tesla";
            this.listOfFlights = [];
        }
        addFlight (flight) {
            if (!flight || !(flight instanceof Flight)) {
                throw new Error ("Invalid input!")
            }
            this.listOfFlights.push(flight);
        };
        //method that helps us get the number of passengers
        passengersLength () {
			let count = 0;
			this.listOfFlights.forEach(function(flight) {
				count += flight.numberOfPassengers();
			})
			return count;
		}
        getData () {
            let result = `Airport ${this.name}, total passengers: ${this.passengersLength()}
            `;
            this.listOfFlights.forEach(function(flight) {
				result += flight.getData();
			});
            return result;
        }
    };

    function createFlight (relation, date) {
        return new Flight (relation, date);
    };

    function createPassenger (firstname, lastname, seatnumber, category) {
        var person = new Person(firstname, lastname);
        var seat = new Seat(seatnumber, category);
        return new Passenger(person, seat);
    };


    //testing

    try {
        const airport = new Airport();
        let flight1 = createFlight("Belgrade - New York", 'Oct 25 2017');
        let flight2 = createFlight("Barcelona - Belgrade", 'Nov 11 2017');
        let passenger1 = createPassenger("John", "Snow", 1, "b");
        let passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
        let passenger3 = createPassenger("Daenerys", "Targaryen", 14);
        let passenger4 = createPassenger("Tyrion", "Lannister");
        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);
        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);
        airport.addFlight(flight1);
        airport.addFlight(flight2);
        console.log(airport.getData());
    } catch (err) {
        console.log("Error message: " + err.message);
    }
})();