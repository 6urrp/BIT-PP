function App (name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
App.prototype.getData = function () {
    console.log(this.name + ", " + this.licence + ", " + this.stars)
}
App.prototype.isCCLicence = function () {
    return (this.licence === "CC");
}
App.prototype.like = function () {
    this.stars += 1;
}
App.prototype.showStars = function () {
    console.log(this.stars);
}


function WebApp (name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;

    this.reactBased = function () {
        var result = false;
        this.technologies.forEach(function (el) {
            if (el === "React") {
                result = true;
            }
        })
        return result;
    }
    this.getData = function () {
        console.log(this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars);
    }
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;



function MobileApp (name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;

    this.forAndroid = function () {
        var result = false;
        this.platforms.forEach(function (el) {
            if (el === "Android") {
                result = true;
            }
        })
        return result;
    }
    this.getData = function () {
        console.log(this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars);
    }
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;


var web = new WebApp("Bla Bla Car", "https://www.blablacar.rs/", ["JavaScript", "React", "PHP"], "CC", 3.5);
console.log(web.getData());
console.log(web.like());
console.log(web);

var mobile = new MobileApp("outloock", ["iOS", "Android"], "CC", 4);
console.log(mobile);
console.log(mobile.showStars());
console.log(mobile.forAndroid());
