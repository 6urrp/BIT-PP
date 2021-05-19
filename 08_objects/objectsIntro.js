/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like! */

var myCoffee = {
    name: "nescafe",
    strength: "medium",
    flavour: "classic",
    milk: 2,
    sugar: false
};

console.log(myCoffee.milk);


//creating object with  - this - 

function Coffee (n, s, f, m ,s) {
    this.name = n;
    this.strength = s;
    this.flavour = f;
    this.milk = m;
    this.sugar = s;
};

var myFavCoffee = new Coffee ("nescafe", "medium", "classic", 2, false);
console.log(myFavCoffee);
console.log(myFavCoffee instanceof Coffee);
console.log(myFavCoffee instanceof Object);

//third way

function coffee (n, s, f, m, s) {
    return {
        name : n,
        strength : s,
        flavour : f,
        milk : m,
        sugar : s
    };
}
var preciousCoffee = coffee ("nescafe", "medium", "classic", 2, false);
console.log(preciousCoffee);



/*2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.*/

var favouriteMovie = {
    name: "The Father",
    actor: {
        firstname: "Anthony",
        lastname: "Hopkins"
    },
    director: {
        firstname: "Florian",
        lastname: "Zeller"
    },
    genre: "Drama",
    popularity: 10
};

console.log(favouriteMovie.actor.lastname);
console.log(favouriteMovie.director.firstname);


function Movie (n, f, l, d, g, p) {
    this.name = n;
    //this.actor.firstname = f;
    //this.actor.lastname = l; //kako ovde ide posto je objekat u objektu
    this.director = d;
    this.genre = g;
    this.popularity = p;
}

var myMovie = new Movie ("La La Land", "Emma", "Stone", "Damien Chazelle", "Drama/Music", 10);
console.log(myMovie);


/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project's
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */

function createObject (desc, lang, repos, develop) {
    var object = {
      description: desc,
      programmingLanguage: lang,
      gitRepository: repos, 
      develop: develop,
      reposit: function(){
          return repos;
      },
      isJS: function(){
        for (var i = 0; i < lang.length; i++) {
            if (lang[i] === "JavaScript"){
                return true;
            }    
        } 
        return false;
      },
      isDevelop: function(){
        return  develop ? "Your project is in development" : "Your project is not in development";
      }
    };
    return object;
}

var projectPP = createObject("Programming Principles", "JavaScript", "https://github.com/6urrp/BIT-PP", true)
console.log(projectPP);

var projectWeb = createObject("Web Projects", ["HTML", "CSS", "SASS", "JavaScript"], "https://github.com/6urrp/BIT-WEB", true);
console.log(projectWeb.isJS());


function Project (d, pl, repo, dev) {
    this.description = d;
    this.language = pl;
    this.repository = repo;
    this.develop = dev;
    this.printRepository = function () {
        return this.repository;
    };
    this.javascriptOrNot = function () {
        if (this.language === "JavaScript") {
            return true;
        } else {
            return false;
        }
    };
    this.inDevelop =  function () {
        return this.develop ? "Your project is in development" : "Your project is not in development";
    };
}

var myRepo = new Project ("Programming Principles", "JavaScript", "https://github.com/6urrp/BIT-PP", true);
//console.log(myRepo);
console.log(myRepo.inDevelop());
console.log(myRepo.javascriptOrNot());
console.log(myRepo.printRepository());
/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/

function culinaryRecipe(name, type, complex, list, prepTime, instr) {
    var myRecipe = {
        name: name,
        typeOfCuisine: type,
        complexity: complex,
        ingredients: list,
        preparationTime: prepTime,
        instuctions: instr,
        printAllIng: function () {
            return this.ingredients.toString();
        },
        check: function() {
            if (prepTime <= 15) {
                return true;
            } else {
                return false;
            }
        },
        deleteIng: function(list, a) {
            var newList = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i] !== a) {
                    newList[newList.length] = list[i];
                }
            }
            return newList;
        }

    }
    return myRecipe;
}

var tiramisu = culinaryRecipe(
    "tiramisu",
    "Italian cuisine", 
    2, 
    ["biscuits", "mascarpone", "whipped cream", "coffee", "sugar", "cocoa"], 
    30,
    "Whisk three of the egg whites until stiff, then set aside. Whisk the egg yolks with the sugar until pale and voluminous, then whisk in the mascarpone, a little at a time, until smooth and well combined – you don't want lumps of cheese.");


console.log(tiramisu.deleteIng(tiramisu.ingredients, "mascarpone"));


//drugi nacin

function CulinaryRecipe (name, type, complex, list, prepTime, instr) {
    this.name = name;
    this.typeOfCuisine = type;
    this.complexity = complex;
    this.ingredients = list;
    this.preparationTime = prepTime;
    this.instuctions = instr;
    this.printIngr = function () {
        return this.list.toString();
    };
    this.check = function () {
        if (prepTime <= 15) {
            return true;
        } else {
            return false;
        }
    };
    this.deleteItem = function (list, ing) {
        var newList = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i] !== ing) {
                    newList[newList.length] = list[i];
                }
            }
            return newList;
    }
    this.changeCuisine = function (type) {
        return this.typeOfCuisine = type;
        
    }
}

var tiramisu = new CulinaryRecipe (
    "tiramisu",
    "Italian cuisine", 
    2, 
    ["biscuits", "mascarpone", "whipped cream", "coffee", "sugar", "cocoa"], 
    30,
    "Whisk three of the egg whites until stiff, then set aside. Whisk the egg yolks with the sugar until pale and voluminous, then whisk in the mascarpone, a little at a time, until smooth and well combined – you don't want lumps of cheese."
    );

console.log(tiramisu.changeCuisine("serbian"));

tiramisu.ingredients.push("liker");
console.log(tiramisu);
