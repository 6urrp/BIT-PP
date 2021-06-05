"use strict";

(function () {

    function Country(name, odds, continent) {
        if (!name || !odds) {
            throw new Error ("Please fill out all fields!")
        }
        this.countryName = name;
        this.odds = odds;
        if (!continent)  {
            throw new Error ("Please, fill out continent name!");
        }
        this.continent = continent;
    };

    function Continent () {
        this.EUROPE = "EU";
        this.ASIA = "AS";
        this.AFRICA = "AF";
        this.SOUTHAMERICA = "SA";
        this.NORTHAMERICA = "NA";
        this.AUSTRALIA = "AU";
    };

    function Person (name, surname, date) {
        if (!name || !surname || !date) {
            throw new Error ("Please, fill out the required fields!")
        }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(date);
        this.getMethod = function () {
            var result = "";
            var day = this.dateOfBirth.getDate();
            var month = this.dateOfBirth.getMonth() + 1;
            var year = this.dateOfBirth.getFullYear();
            return result += this.name + " " + this.surname + ", " + day + "." + month + "." + year + ".";


        };
    };
    
    function Player (person, bet, country) {
        if (!person || !bet) {
            throw new Error ("All fiends are required!");
        }
        this.person = person;
        this.betAmount = bet;
        if (!country || !(country instanceof Country)) {
            throw new Error ("Country field is required!")
        }
        this.country = country;
    }

    function Address (country, city, code, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = code;
        this.street = street;
        this.streetNumber = number;
        this.getMethod = function () {
            var abbrevation = this.country[0];
            var vowels = ["a", "e", "i", "o", "u"];
            for (var i = 1; i < this.country.length; i++) {
                if (!(vowels.includes(this.country[i].toLowerCase()))) {
                    abbrevation += this.country[i];
                }
            }

            return this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + ", " + abbrevation.toUpperCase().slice(0, 2); 
        }
    };

    function BettingPlace (address) {
        this.address = address;
        this.listOfPlayers = [];
    };

    function BettingHouse (competition, numbers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numbersOfPlayers = numbers;
    };





    //testing
    
    try {
        var continent = new Continent();
        var cntr1 = new Country("Italy", 20, continent.EUROPE);
        var person1 = new Person("Sandra", "Tasic", "Sep 6 2021");
        var player1 = new Player("Sandra Tasic", 500, cntr1);
        var address1 = new Address("Italy", "Venice", 21000, "Polgar Andrasa", 2);
        console.log(address1.getMethod());
    }catch (err) {
        console.log(err.message);
    }
})();


