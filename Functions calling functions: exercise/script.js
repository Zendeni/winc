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


//VAT exercise 2
const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]


