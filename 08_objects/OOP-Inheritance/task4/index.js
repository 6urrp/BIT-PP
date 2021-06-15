class App {
    constructor (name, licence, stars) {
        this.name = name
        this.licence = licence
        this.stars = stars
    }

    getData() {
        console.log(this.name + ", " + this.licence + ", " + this.stars)
    }

    isCCLicence() {
        return (this.licence === "CC");
    }

    like() {
        this.stars += 1;
    }

    showStars() {
        console.log(this.stars);
    }
}



class WebApp extends App {
    constructor (name, url, technologies, licence, stars) {
        super (name, licence, stars)
        
        this.url = url
        this.technologies = technologies
    }

    reactBased() {
        var result = false;
        this.technologies.forEach(function (el) {
            if (el === "React") {
                result = true;
            }
        })
        return result;
    }

    getData() {
        console.log(this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars);
    }
}

class MobileApp extends App {
    constructor (name, platforms, licence, stars) {
        super(name, licence, stars)

        this.platforms = platforms
        
    }

    forAndroid() {
        var result = false;
        this.platforms.forEach(function (el) {
            if (el === "Android") {
                result = true;
            }
        })
        return result;
    }

    getData() {
        console.log(this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars);
    }
}


var web = new WebApp("Bla Bla Car", "https://www.blablacar.rs/", ["JavaScript", "React", "PHP"], "CC", 3.5);
console.log(web.getData());
console.log(web.like());
console.log(web);

var mobile = new MobileApp("outloock", ["iOS", "Android"], "AA", 4);
console.log(mobile);
console.log(mobile.showStars());
console.log(mobile.isCCLicence());