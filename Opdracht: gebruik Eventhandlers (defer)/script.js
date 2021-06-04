
const button = document.getElementById('mybutton');
button.addEventListener('click', event => { console.log(alert("button clicked")); });

/*
const button2 = document.getElementById('mybutton2');
button2.addEventListener('click', event => { document.body.classList.add('red-background') });
*/

const button2 = document.getElementById('mybutton2');
button2.addEventListener('click', event => { document.body.classList.toggle('red-background') });

/*
function myFunction() {
    $(this).toggleClass('buttonClassB');
};
*/