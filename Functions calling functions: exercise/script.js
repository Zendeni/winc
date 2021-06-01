const ageCheck = function (age) {
    //const age = 18;
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const kiddoCheck = function (age) {
    if (ageCheck(age)) {
        return "Hello there!";
    } else {
        return " hey kiddo";
    }
}

console.log(kiddoCheck(12))
console.log(kiddoCheck(18))

//VAT exercise 1
const vatcalc = function (baseprice, vat) {
    return baseprice * (vat / 100)
};

const priceVat = function (baseprice, vat) {
    const totalPrice = baseprice + priceVat(price, vat);
    return totalPrice.priceVat(2)
}

console.log(vatcalc(100, 21))
console.log(vatcalc(100, 9))



