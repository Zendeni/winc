const checkNumber = function (number) {
    if (number >= 100) {
        return true
    } else if (number <= 100) {
        return false
    }
}

console.log(checkNumber(99))
//this function produces



//opdr.2 Brenda the A.I Bouncer
const maxPeopleClub = 100;
const currentPeopleClub = 85;
const personAge = 18; //min. age to enter the club

const Brenda = function (maxPeopleClub, currentPeopleClub, personAge) {

    if (personAge >= 18) if (currentPeopleClub < maxPeopleClub) { return "come in" }
    else { return "it's too busy now, come back later" }
    else { return "this is a club for adults" }
};

console.log(Brenda(100, 100, 19))
//this function 'does' check the parameters and gives return value



//average of five numbers
const average = function (numa, numb, numc, numd, nume) {
    const average = ((numa + numb + numc + numd + nume) / 5); return average;
};
console.log(average(1, 2, 3, 4, 5))
console.log(average(15, 27, 36, 43, 54))
console.log(average(18, 72, 73, 14, 25))
//this function 'produces' an average.