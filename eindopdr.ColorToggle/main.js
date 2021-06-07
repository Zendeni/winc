
const menuColor = document.getElementById('menu')
const navig = document.getElementById('navigation').addEventListener('mouseenter', event => { menuColor.classList.toggle('menuOpen') })
menuColor.addEventListener('click', event => { menuColor.classList.toggle('menuOpen') });
const imgMenuOpen = document.getElementById('imgMenu').addEventListener('click', event => { menuColor.classList.toggle('menuOpen') })
const menuHome = document.getElementById('menuHome').addEventListener('click', event => { document.body.style.backgroundColor = 'snow' });
const menuRed = document.getElementById('menuRed').addEventListener('click', event => { document.body.style.backgroundColor = 'red' });
const menuOrange = document.getElementById('menuOrange').addEventListener('click', event => { document.body.style.backgroundColor = 'orange' });
const menuPurple = document.getElementById('menuPurple').addEventListener('click', event => { document.body.style.backgroundColor = 'purple' });
const menuGreen = document.getElementById('menuGreen').addEventListener('click', event => { document.body.style.backgroundColor = 'green' })

menu.document.getElementById("menuGreen").addEventListener("click", function () {
    document.getElementById("para").innerHTML = "Green";
});

//volgens mij kan ik geen functie 'in' mijn eventlistener stoppen? 


var rad = document.getElementById('menu');
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function () {
        (prev) ? console.log(prev.value) : null;
        if (this !== prev) {
            prev = this;
        }
        console.log(this.value)
    });
}


//  --Hier kwam ik niet helemaal uit..
// /@deprecated>
// document.addEventListener('keypress', event => {
//     if (event.keyCode === 49) {
//         =====;
//     } else if (event.keyCode === 50) {
//         =====;
//     } else if (event.keyCode === 51) {
//         =====;
//     } else if (event.keyCode === 52) {
//         =====;
//     } else if (event.keyCode === 53) {
//         =====;
//     }
// });

// // get the element in question
// const input = document.getElementsByTagName("body")[0];

// // focus on the input element
// input.focus();

// // add event listeners to the input element
// input.addEventListener('keypress', event => {

//     console.log("You have pressed key: ", event.key);
// });

// // dispatch keyboard events
// input.dispatchEvent(new KeyboardEvent('keypress', { 'key': 'h' }));
// input.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'e' }));
// input.dispatchEvent(new KeyboardEvent('keyup', { 'key': 'y' }));