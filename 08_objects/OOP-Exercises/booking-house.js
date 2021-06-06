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
        this.getMethod = function () {
            var abbr = abbrevation(this.country.countryName);
            var expectedAmount = (this.country.odds * this.betAmount).toFixed(2);
            var age = getAge(this.person.dateOfBirth);
            return abbr + ", " + expectedAmount + " eur, " + this.person.name + " " + this.person.surname + ", " + age + " years";
            
        }
    }

    function Address (country, city, code, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = code;
        this.street = street;
        this.streetNumber = number;
        this.getMethod = function () {
            var country = abbrevation(this.country); 
            return this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + ", " + country;
        }
    };

    function BettingPlace (address) {
        if (!address || !(address instanceof Address)) {
            throw new Error ("Please insert your address!");
        }
        this.address = address;
        this.listOfPlayers = [];
        this.addPlayer = function (player) {
            this.listOfPlayers.push(player);
        }
        this.getMethod = function () {
            var allBets = 0;
            this.listOfPlayers.forEach(function (player) {
                allBets += player.betAmount;
            });
            return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + allBets + "eur";
        }
    };

    function BettingHouse (competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numbersOfPlayers = 0;
        this.addBettingPlaces = function (place) {
            this.listOfBettingPlaces.push(place);
            this.numbersOfPlayers += place.listOfPlayers.length;
        }
        this.allData = function () {
            var country = [];
            var result = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.numbersOfPlayers + " bets" + "\n";
            this.listOfBettingPlaces.forEach(function (place) {
                result += "\t" + place.getMethod() + "\n"; 
                place.listOfPlayers.forEach(function (player) {
                    result += "\t\t" + player.getMethod() + "\n";
                    country.push(player.country.countryName);
                })
                
            });
            console.log(country);
            return result;

        }
    };



    //object factory

    function createPlayer (person, bet, country) {
        return new Player(person, bet, country);
    };

    function createBettingPlace(address) {
        return new BettingPlace(address);
    };


    //utility functions

    function abbrevation (country) {
        var vowels = ["a", "e", "i", "o", "u"];
        var abbr = country[0];
        for (var i = 1; i < country.length; i++) {
            
            if (!(vowels.includes(country[i].toLowerCase()))) {
                abbr += country[i];
            }
        }
        return abbr.toUpperCase().slice(0, 2);
    }

    function getAge(birthday) {
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }



    //testing
    
    try {
        var Continent = new Continent();
        //first player
        var person1 = new Person("El", "Profesor", "Feb 23 1975");
        var country1 = new Country("Spain", 250, Continent.EUROPE);
        var player1 = createPlayer(person1, 3500, country1);
        //second player
        var person2 = new Person("Alba", "Flores", "Oct 27 1986");
        var country2 = new Country("Kenya", 468, Continent.AFRICA);
        var player2 = createPlayer(person2, 5500, country2);
        //third player 
        var person3 = new Person("Arturo", "Roman", "Oct 8 1972");
        var country3 = new Country("Spain", 120, Continent.EUROPE);
        var player3 = createPlayer(person3, 1128, country3);
        //forth player
        var person4 = new Person("Ursula", "Corbero", "Aug 11 1989");
        var country4 = new Country("Japan", 88, Continent.ASIA);
        var player4 = createPlayer(person4, 8845, country4);

        //first betting place
        var address1 = new Address ("Colorado", "Denver", 80014, "Eliot St", 86)
        var bettingPlace1 = createBettingPlace(address1);
        //second betting place
        var address2 = new Address("Germany", "Berlin", 10115, "Kreuzbergstraße", 21);
        var bettingPlace2 = createBettingPlace(address2);

        //add players to betting places
        bettingPlace1.addPlayer(player1);
        bettingPlace1.addPlayer(player2);
        
        bettingPlace2.addPlayer(player3);
        bettingPlace2.addPlayer(player4);


        //add betting places 
        var bettingHouse = new BettingHouse("Football World Cup Winner,");
        bettingHouse.addBettingPlaces(bettingPlace1);
        bettingHouse.addBettingPlaces(bettingPlace2);

        
        console.log(bettingHouse.allData());

        
    }catch (err) {
        console.log(err.message);
    }
})();