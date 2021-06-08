const Game = () => {
    const person = prompt('Type in here, your name');

    if (person != null) {
        alert(`Hey ${person}!`);
    }

    let lowestNumber = parseInt(
        prompt(`What is the lowest number you want to play with?`)
    );
    let highestNumber = parseInt(
        prompt(`What is the highest number you want to play with?`)
    );

    const getRandomNumberBetweenTwoNumbers = (min, max) => {
        Math.floor(Math.random() * (max - min) + min);
    };

    const randomNumber = getRandomNumberBetweenTwoNumbers(
        lowestNumber,
        highestNumber
    );
    console.log(`Winning number: ${randomNumber}`);

    for (i = 0; i < 5; i++) {
        const getNumberOfGamer = () => {
            const numberOfGamer = prompt(
                `Give a number between ${lowestNumber} to ${highestNumber} ,to guess...`
            );
            if (numberOfGamer >= lowestNumber && numberOfGamer <= highestNumber) {
                return numberOfGamer;
            } else if (isNaN(numberOfGamer) || numberOfGamer === null) {
                alert(
                    `This is not a number, give a new number between ${lowestNumber} and ${highestNumber} `
                );
                return numberOfGamer;
                getNumberOfGamer();
            } else {
                alert(
                    `Your number is greater than ${highestNumber} or smaller than ${lowestNumber}, pick a new number between ${lowestNumber} and ${highestNumber}`
                );
                return numberOfGamer;
                getNumberOfGamer();
            }
        };

        let numberOfGamer = getNumberOfGamer();

        if (randomNumber == numberOfGamer) {
            console.log(`You gave in the number: ${numberOfGamer} this is correct!`);
            alert(
                `Congratulations ${person} you won, ${numberOfGamer} the game!`
            );
            break;
        } else if (i < 4 && i !== 5) {
            console.log(`Your given number: ${numberOfGamer} is not correct`);
            alert(
                `Your given number: ${numberOfGamer} ,is not correct, you have used ${i + 1
                } of the 5 turns.`
            );
        } else {
            console.log(`Your given number: ${numberOfGamer} ,is not correct`);
            alert(
                `Your given number: ${numberOfGamer} is not correct, you've ran out of turns. ${person} try again later.`
            );
        }
    }
};
