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
        number = number || (parseInt(((100 - 10) * Math.random()) + 10));
        ctgr = ctgr || "e";
        if (!number || !ctgr) {
            throw new Error ("Please fill in all fields!");
        };
        if (typeof number !== "number") {
            throw new Error ("Your entry must be in the form of numbers");
        };
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
    }

    function Airport (flights) {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            if (!flight || !(flight instanceof Flight)) {
                throw new Error ("Invalid input!")
            }
            this.listOfFlights.push(flight);
        }
    }


    //testing

    try {
        var person1 = new Person("Sandra", "Tasic");
        var seat1 = new Seat ();
        var passenger1 = new Passenger(person1, seat1);
        var flight1 = new Flight("Belgrade - New York", "Oct 26 2022")
        flight1.addPassenger(passenger1);
        var airport1 = new Airport();
        airport1.addFlight(flight1);
        console.log(airport1);
    } catch (err) {
        console.log("Error message: " + err.message);
    }
})();


