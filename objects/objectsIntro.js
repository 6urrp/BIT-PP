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

//var projectPP = createObject("Programming Principles", "JavaScript", "https://github.com/6urrp/BIT-PP", true)
//console.log(projectPP.reposit());

var projectWeb = createObject("Web Projects", ["HTML", "CSS", "SASS", "JavaScript"], "https://github.com/6urrp/BIT-WEB", true);
console.log(projectWeb.isJS());


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
