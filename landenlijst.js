
// document.getElementsByClassName("btnLandenlijst").addEventListener("click", function () {
//     randomPersonData.region = landen;
//     document.getElementById("display").innerHTML = "hello";
// });

// https://dev.to/banesag/sorting-arrays-of-strings-in-javascript-2g11


// let sortedRandomPersonData = randomPersonData.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (b > a) {
//         return -1;
//     }
//     return 0;
// });
// console.log(randomPersonData);


const generateCountryHTML = country => {
    const li = document.createElement("li");
    li.innerHTML = country;
    return li;
};

const displayCountries = () =>
    getCountries(randomPersonData)
        .map(generateCountryHTML)
        .forEach(addToResultList);

document
    .querySelector(".countries")
    .addEventListener("click", displayCountries);