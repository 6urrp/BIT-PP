function Movie(name, length, genre){
    
    this.name = name;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    var abbrevation = (this.genre[0] + this.genre[this.genre.length-1]).toUpperCase();
    return this.name + ", " + this.length + "min, " + abbrevation;
}


function Program (date) {
    this.date = new Date(date);
}

Program.prototype.getData = function() {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    return day + "." + month + "." + year;
}

var prg = new Program("Jun 26 2022");
console.log(prg.getData());