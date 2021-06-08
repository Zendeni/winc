
const btn = document.getElementById("menu-toggle");
const lines = btn.querySelectorAll(".line");
const cls = { open: "open", close: "close" };
let btnClass = cls.open;

btn.addEventListener("mouseenter", () => {
    if (btn.classList.contains(cls.open)) {
        btn.classList.remove(btnClass);
        btnClass = cls.close;
    } else if (btn.classList.contains(cls.close)) {
        btn.classList.remove(btnClass);
        btnClass = cls.open;
    }

    void btn.offsetWidth;
    btn.classList.add(btnClass);


});


var toggleMenu = document.getElementById("menu"); // get a reference to p and cache it

function show() {
    toggleMenu.classList.toggle('visible'); // toggle the hideP class
}

document.getElementById('menu').addEventListener('click', show); // add an event listener to the button


// const menu = document.getElementById('menu');

// menu.addEventListener("mouseenter", () => {
//     if (menu.classList.contains('.hidden')) { toggleClass('.open') };


// const showMenu = document.ul.getElementById('menu');

// showMenu.addClassLists('menuHidden', () => { showMenu.style.visibility = 'visible' });




// function toggleMenu() {
//     var menuSwitch = document.getElementById("menu");
//     if (menuSwitch.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// const xtest = getElementById("idtest");
// xtest.addEventListener("click", () => {
//     document.style.visibility = "hidden";
// })


// function toggleMenu() {
//     // get the menu
//     var menuColor = document.getElementById('menu');

//     // get the current value of the menu's display property
//     var displaySetting = menuColor.style.display;

//     // also get the menu visibility value, so we can change what it says
//     var clockButton = document.getElementById('clockButton');

//     // now toggle the clock and the button text, depending on current state
//     if (displaySetting == 'block') {
//         // clock is visible. hide it
//         myClock.style.display = 'none';
//         // change button text
//         clockButton.innerHTML = 'Show clock';
//     }
//     else {
//         // clock is hidden. show it
//         myClock.style.display = 'block';
//         // change button text
//         clockButton.innerHTML = 'Hide clock';
//     }
// }


// function toggleClock() {
//     // get the clock
//     var myClock = document.getElementById('clock');

//     // get the current value of the clock's display property
//     var displaySetting = myClock.style.display;

//     // also get the clock button, so we can change what it says
//     var clockButton = document.getElementById('clockButton');

//     // now toggle the clock and the button text, depending on current state
//     if (displaySetting == 'block') {
//       // clock is visible. hide it
//       myClock.style.display = 'none';
//       // change button text
//       clockButton.innerHTML = 'Show clock';
//     }
//     else {
//       // clock is hidden. show it
//       myClock.style.display = 'block';
//       // change button text
//       clockButton.innerHTML = 'Hide clock';
//     }
//   }



// //const btn = document.getElementById("menu-toggle");	// Get element
// btn.style.visibility = "hidden";			// Hide element
// btn.style.visibility = "visible";			// Show element
// const visible = btn.style.visibility;		// Get visibility


// elem.style.display = 'none'; // hide
// elem.style.display = 'block'; // show - use this for block elements (div, p)
// elem.style.display = 'inline'; // show - use this for inline elements (span, a)


// // btn.addEventListener('mouseenter', () => {
// //     btn.style.visibility = "visible";
// // })



// //const nav = document.querySelector('.nav');
// //.addEventListener('mouseenter'.style.visibility = "visible");