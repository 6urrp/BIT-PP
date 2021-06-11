"use strict";

(function () {

    function Person (name, surname) {
        if (!name || !surname) {
            throw new Error("Please insert your name and surname!");
        }
        this.firstname = name;
        this.lastname = surname;
        this.getData = function () {
            return this.firstname + " " + this.lastname;
        }
    }

    function Seat (number, ctgr) {
        if (typeof number !== "number") {
            throw new Error ("Your entry must be in the form of numbers");
        };
        number = number || (parseInt(((100 - 10) * Math.random()) + 10));
        ctgr = ctgr || "e";
        this.seatNumber = number;
        if (!['e', 'b'].includes(ctgr)) { //prosledjeni element trazi u array-u
			throw new Error('Invalid input!') 
		}
        this.seatCategory = ctgr;
        this.getData = function () {
            return this.seatNumber + ", " + this.seatCategory.toUpperCase();
        }

    }

    function Passenger (person, seat) {
        if (!person || !(person instanceof Person)) {
            throw new Error("Invalid input!");
        };
        if (!seat || !(seat instanceof Seat)) {
            throw new Error("Invalid input!");
        };
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        }
    }

    function Flight (rel, date) {
        if (!rel || !date) {
            throw new Error ("Please fill in all fields!");
        };
        this.relation = rel;
        this.date = new Date(date);
        this.passengers = [];
        this.addPassenger = function (passenger) {
            if (!passenger || !(passenger instanceof Passenger)) {
                throw new Error ("Invalid input!");
            }
            this.passengers.push(passenger);
        };
        this.getData = function () {
            var result = "";
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1; //ide od 0-11
            var year = this.date.getFullYear();
            result += "\t" + day + "." + month + "." + year + ", " + this.relation + "\n";
            this.passengers.forEach(function (pass) {
                result += "\t\t" + pass.getData() + "\n"; // getData()
            })
            return result;
             
        }
        //method that helps us get the number of passengers
        this.numberOfPassengers = function () {
            return this.passengers.length;
        }
    }

    function Airport (flights) {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            if (!flight || !(flight instanceof Flight)) {
                throw new Error ("Invalid input!")
            }
            this.listOfFlights.push(flight);
        };
        //method that helps us get the number of passengers
        this.passengersLength = function () {
			var count = 0;
			this.listOfFlights.forEach(function(flight) {
				count += flight.numberOfPassengers();
			})
			return count;
		}
        this.getData = function () {
            var result = "Airport: " + this.name + ", total passengers: " + this.passengersLength() + "\n";
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
        var airport = new Airport();
        var flight1 = createFlight("Belgrade - New York", 'Oct 25 2017');
        var flight2 = createFlight("Barcelona - Belgrade", 'Nov 11 2017');
        var passenger1 = createPassenger("John", "Snow", 1, "b");
        var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
        var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
        var passenger4 = createPassenger("Tyrion", "Lannister");
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