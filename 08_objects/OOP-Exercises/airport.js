"use strict";

(function () {

    function Person (name, surname) {
        this.firstname = name;
        this.lastname = surname;
        this.getData 
    }

    var me = new Person ("Sandra", "Tasic");
    console.log(me);

    function Seat (number, ctgr) {
        if (typeof number === "undefined") {
            this.seatNumber = parseInt(((100 - 10) * Math.random()) + 10);
        } else if (typeof number === "number"){
            this.seatNumber = number;
        }

        if (typeof ctgr === "undefined") {
            this.category = "e";
        } else if (ctgr === "e" || ctgr ==="b") {
            this.category = ctgr;
        }
    }

    var st = new Seat ();
    console.log(st);

    function Passenger (person, seat) {
        this.person = person;
        this.seat = seat;
    }

    var pas = new Passenger(me, st);
    console.log(pas.person);

    function Flight (rel, date) {
        this.relation = rel;
        this.date = date;
        this.passengers = [];
    }

    function Airport (flights) {
        this.name = "Nikola Tesla";
        this.listOfFlights = flights;
    }

})();

