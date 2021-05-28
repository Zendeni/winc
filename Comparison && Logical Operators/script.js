const myAge = 29;
const isFemale = true;
const driverStatus = 'bob';
const myName = "Bram";
const totalAmount = "12";

if (myAge >= 18) {
    console.log("Welkom!");
} else {
    console.log("Sorry, maar je moet 18 jaar en ouder zijn.");
};

if (isFemale) {
    console.log("Welkom, mevrouw!");
} else {
    console.log("Sorry, het is ladiesnight!")
};

if (driverStatus == "bob") {
    console.log("Jij bent de Bob!");
} else {
    console.log("Laat iemand ander rijden of bel een taxi.")
};

if (myAge <= 18 && myAge <= 25) {
    console.log("Je krijgt 50% korting!")
};

if (myName === 'Bram' || myName === 'Sarah') {
    console.log("Je krijgt een gratis biertje!")
};

if (totalAmount >= 25) {
    console.log("Jij krijgt gratis (vega)bitterballen.")
} if (totalAmount >= 50) {
    console.log("Jij krijgt gratis portie nacho's.")
} if (totalAmount >= 100) {
    console.log("Jij krijgt een gratis flesje champagne!")
} else { console.log("wilt je nog iets bestellen?") };