
const getPokemon = async function () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();

    console.log(data.results[0].name)


    const pokeType = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
    const data2 = await pokeType.json()

    console.log(data2.types[0].type.name)


    document.querySelector('#pokemon').innerHTML = data.results[0].name && data2.types;

    return data.results[0].name && data2.types;
};

getPokemon();

// document.getElementsByClassName('showPokemon').addEventListener('click', getPokemon);




// const url = ('https://pokeapi.co/api/v2/pokemon')

// fetch(url)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         // Do some stuff, show data etc.
//     })
//     .catch((error) => {
//         console.log(error);
//     });