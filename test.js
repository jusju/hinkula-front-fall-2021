
// globaali scope - kannattaa välttää
var a = 4;
const PI = 3.141;

const person = {firstnNme: "Juha", lastName: "Hinkula"};

console.log("Hello " + person.lastName);
console.log(`Hello ${person.firstName} ${person.lastName}!`);
// valuuttamerkit escapetaan

function(x, y) {
    console.log("Hello");
}
//parametrit => mitä palautetaan

(x, y) => x*xy
// ilman parametrejä
() =>

function calc(x) {
    return x*x;
}

calc(2);
const calc = x => x*x;
calc(2);

const calc = (x, y) => {
    const a = x * y;
    console.log(a);
    return a;
}
// fat arrow on hyvä call backissa
// callback kun function saa parametrinä
function calc(function(x) {{

}}
// anonyymi nuolifunktio
function calc(x => x*2)

const newPerson = {...person, firstname: 'William'}
// spread käy olioille ja taulukoille


// default is function scope
function calc() {
    // funktion skooppi
    var b = 7;



    if(a > 3) {
        b = 2;

        // let blokkinäkyvä
        let c = 4;

    }
}
