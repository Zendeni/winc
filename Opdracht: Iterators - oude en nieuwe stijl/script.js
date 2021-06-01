
const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
//while loop
while (i < colors.length) {
    console.log(colors[i]);
    i++;
};
//for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

//for each array.call
colors.forEach(i => console.log(i));




/*
Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
for loop neemt twee regels in beslag en while loop neemt 4 regels in beslag.

Hoeveel regels neemt mijn forEach method in beslag?
Een regel.

Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop?
Met for.Each, kun je per element in je array een functie uitvoeren.

Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
for.Each is makkelijker te lezen, omdat het compacter en fat arrow heeft.

Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

for..in

Ben je nu aan het itereren?
Nee

*/

var obj = {
    name: "Simon",
    age: "20",
    clothing: {
        style: "simple",
        hipster: false
    }
}

for (var propt in obj) {
    console.log(propt + ': ' + obj[propt]);
}