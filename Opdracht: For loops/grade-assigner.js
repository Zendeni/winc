function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}


for (let i = 60; i <= 100; i++) {
    assignGrade((score = i));
    console.log('Voor ' + i + ' punten, krijg je een ' + assignGrade(score));
}

/*
Schrijf een for-loop die "iterate" van 60 tot 100. Dit is de "score" (grade)  van de student.
Voor elke loop, roep de bovenstaande functie aan met de i (grade) als argument.
Console.log vervolgens: "Voor 91 punten, krijg je een A".
De uitkomst is 40 regels lang.

 "Voor 60 punten, krijg je een F".
....
"Voor 66 punten, krijg je een D".
....
"Voor 85 punten, krijg je een B"
etc etc.
*/