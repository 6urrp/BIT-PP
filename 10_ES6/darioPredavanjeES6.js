//ecmascript je skup pravila kako mozemo da pisemo js
//es6 nova pravila!


//es5 u odnosu na prethodno nije menjala sintaksu, samo menja ponasanje kako se nesto desava.
//es6 menja sintaksu

//ako pisemo stari naziv ali pisemo es6, on ce biti validan, to je napravljeno tako da ne bi pucao internet, cak i ako pisemo najstariji js to ce biti validno, jer je kompatibilno sa ovim novim

//koncepti se ne menjaju (syntactic sugar), vec se samo sintaksno olaksava. iza zavese se sve isto desava, samo nesto pisemo drugacije

//cilj nove es6, jedan od, je da se js lakse kompajlira na druge jezike i iz drugih jezika na js - da se lakse prevodi, da bi js vise licio na druge programske jezike -(dario predlaze da ucimo type script, lici na js, a znaci dosta u razvoju programiranja, manje bagova ima). 


//NOVIJE VERZIJE JS ne ukidaju staru sintaksu i mogucnosti, umesto da se sklanjaju stare mogucnosti, dodaju se nove. strict mode u ES5 izazvalo je pucanje nekog koda, zato es6 supprts sloppy mode code outside modules and class definitions 
//* use linting tools to detect use of "deprecated" features (linting tools su dodatne extensije koje se instaliraju u VSC koji nam daju do znanja da je nesto deprecated)

//transpajleri, kompajleri prevode neki jezik u neki drugi, pored toga mogu da prevode jednu verziju jednog jezika u drugu verziju istog jezika. 
//es6 je zastupljena i ugradjena u svim vodecim browserima, ali ako zelimo da se osiguramo da nas es radi, mi mozemo da pisemo es6 a onda da koristimo transpajler koji ce sve to sto smo napisali da prevede i izbilduje u staru verziju es (es5 je podrzana svuda)


//es6 transpajleri: 
//1. Babel: uzme sve sto smo pisali, prevede u es5 i napravi source mape gde se sve to nalazi, ako nesto pukne. Iako cita iz prevedenog js, on nam uz pomoc source mape kaze gde se greska desila, u kojoj liniji koda
//2.typescrit: ne moze da se ucita u html, imamo kompajler koji prevodi ts u js. Najbitnije kod ts jeste superset js, nesto sto lici na js po svemu, s tim sto ima neka dodatna pravila. Najbitnije dodatno pravilo jesu Tipovi podataka, koji su strogo definisani. To je zastupljeno kod ostalih programskih jezika, ali kod js nije. Pored toga ima i dodatne stvari, kao sto je interfejs, ali typescript (tipovi podataka) je najbitnije pravilo.


//koristimo transpajler da bismo prevodili es6.. ne znam hocemo li raditi neki transpajler na kursu


//linting: instaliramo ekstenziju, koja nam odmah pokazuje gde je greska, pre nego sto pokrenemo kod. Linting tools mogu biti integrisani u nas VSC, odnosno editor, odnosno ID, a drugi mozemo da pokrenemo iz komadne linije (git bash), a treci mozemo da podesimo da nam na se kod sredi na svaki save (to je kod prittier npr). Znaci linting tool nas obavestava da imamo neku gresku u kodu.
//najpopularniji js linting tools su:
//1.ESLint
//2.JSLint
//3.JSHint -> preporucuje se jshint, ali dario kaze da su svi manje vise slicni


//Automatizacija: 
//imamo js fajl koji je napisan u es6, pored toga imamo i neke testove koje je neko napisao, koji proveravaju nas kod (test je kod koji zove nasu funkciju i proverava je npr, za svaku neku nasu funkciju pisemo poseban unit test), kada dodamo nesto novo npr, mi moramo da pokrenemo testove, da vidimo da li je neki test pao, moramo da transpajlujemo nas es6 u es5 i npr moramo da formatiramo kod. Umesto da to rucno radimo, mozemo da napravimo jednu komandu, npr Build koja ce sve to da uradi sama na commit, i to se zove automatizovanje taskova. Umesto sve da pokrecemo, to ce se sve samo uraditi na commit


//let i const od danas koristimo, izbacujemo var odmah.

//let: umesto var imamo let. Let ima block scope, sto znaci da ima private scope unutar blocka a ne unutar funkcije (a var ima function scope):

if (true) {
    let a = 10;
} //let ima scope samo unutar tog scopea

console.log(a);//dobicemo da a nije defined
//block je unutar viticaste zagrade, osim kod objects

//let ne hoistuje, a var hoistuje!!

//kada pocnemo da koristimo module, ako koristimo var on nije izolovan, nego je globalan, mozemo da pregazimo nesto iz drugog modula. a let njegova top level upotreba je unutar jednog modula. (necemo moci da pregazimo nesto iz druge skripte)



//const: sluzi da kreiramo varijable za koje smo sigurni da njihova vrednost nece da se menja. 

const a = 5;
a = 10; //dobicemo TypeError: Assignment to constant variable; jer ne mozemo da promenimo vrednost const

const a = [1, 2, 3, 4];
a.push(5);
console.log(a);//pusti ce nas da ovo radimo jer nismo promenili referencu
//ali ako kazemo

const a = [1, 2, 3, 4];
let b = [];

a=b; // ne moze, ne kontam zasto
a.push(5);
console.log(a);

//za funkcije mozemo pisati const:
const f = function () {
    return 1;
}//zato sto cemo retko kad menjati referencu funkcije

//const je uveden da bi se js priblizio drugim jezicima koji takodje imaju const

//const takodje ima block scope, isto kao i let. 
//const must be initialized, znaci ne moze stajati samo const a; ona uvek mora da ima neku vrednost, dok kod let moze (let a;)
//mozemo menjati nizove i objekte, ali ne smemo da menjamo referencu, to nece biti dozvoljeno. Ako hocemo da sprecimo menjanje reference i propertija, mozemo dodati Object.freeze(obj)





//////////////////TEMPLATE STRINGS///////////////////

//uveo se u es6, i omogucava da konkatiniramo stringove i ubacujemo dinamicke vrednosti mnogo lakse nego pre

let name = "Dario";
let age = 55;

let result = "Hello, my name is " + name + ". I am " + age + " years old"; // -> stariji nacin, a sada:
let result = 
    `
      Hello, 
      my name is ${name}.
      I am ${age} years old`;
      
console.log(result);

//sve sto je unutar ${} to ce se evaluirati, npr ako napisemo
let a = `${100+200}`; //bice 300
console.log(a);

//template string podrzavaju whitespace (tab, enter, razmak). Sad mozemo imati string u vise redova bez da se remeti kod.


/////////////////////FUNCTIONS - DEFAULT PARAMETERS////////////////

//pre:

function sum (a, b) {
    a = a || 0;
    b = b || 0;
    return a+b;
}
console.log(sum());

//novi nacin:

function sum (a = 0, b = 0) { //na ovaj nacin setujemo defaultne vrednosti ukoliko ih ne prosledimo
    return a+b;
}
//pre es6 to nismo imali, i to smo radili ovako > a = a || 0; b = b || 0; a u es6 je dozvoljeno da se to radi, kao sto je slucaj kod drugih programskih jezika.



/////////////ENHANCED OBJECT LITERALS/////////////

let name = "Pera";
let age = 33;

let person = {
    name: name,
    age: age
}//setujemo properti i dajemo mu vrednost koju imamo u varijablama gore.
//enhanced nam omogucava da ukoliko je ime propertija i vrednosti isto, mozemo skratiti to
let name = "Pera";
let age = 33;

let person = {
    name,
    age
}

//novi nacin da dodajemo metode objektima:

const obj = {
    numer: 2,
    times(n) { //times je naziv metode, prima n parametar
        return this.numer * n;
    }
}




//////NEW BUILT IN OBJECT METHODS////////////
//ima u prezentaciji, nisam pisala


//dario daje neki primer:

let numbers = [1, -2, -3, 5, 10];

let hasAnyNegative = numbers.some(function (item){
    return item < 0;
});//barem jedan negativan trazimo, some prima callback funckiju. Na svakom itemu proverava neki uslov koji pisemo iza return. Ako barem na nekom itemu imamo true, rezultat cele funkcije bice true
console.log(hasAnyNegative)

let areAllPositive = numbers.every(function(number) {
    return number > 0;
})//vraca true ukoliko su svi pozitivni


//reduce:
//ako hocemo da izracunamo zbir svih brojeva unutar niza:
let numbers = [1, -2, -3, 5, 10];
let result = numbers.reduce(function(acc, item){
    acc += item;
    return acc;
}, 0) //prima prvi parametar akumulator, vrednost koja se akumulira u svakoj iteraciji, a drugi parametar je trenutni item
//reduce ima i drugi parametar, pocetnu vrednost akumulatora. Kod nas je to nula, hocemo da krenemo od nule.
//Uvek moramo da vratimo iz funkcije akumulator
//Ovo se moze upotrebljavati i za konkatinaciju stringa, ako su nam elementi niza stringovi