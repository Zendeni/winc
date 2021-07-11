
const vak = "wiskunde"

setTimeout(function huiswerkMaken(vak, callback) {
    console.log("Ok, ok, ik ga nu mijn", { vak }, "huiswerk maken");
    callback()
}, 2000)

function klaarMetHuiswerk() {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
}

huiswerkMaken(vak, klaarMetHuiswerk())