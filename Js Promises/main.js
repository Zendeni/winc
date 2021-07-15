/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. 
Log the result to the console.
*/

const testNum = num => {
    new Promise((resolve, reject) => {
        if (num > 10) {
            console.log("number is greater than 10")
        } else {
            console.log("number is less than 10")
        }
    }
    )
};
testNum(12)

//oplossing
const testNum1 = num => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + ' is greater than 10');
        } else {
            reject(num + ' is less than 10');
        }
    });
};

testNum1(9)
    .then(result => console.log(result))
    .catch(error => console.log(error));

testNum1(11)
    .then(result => console.log(result))
    .catch(error => console.log(error));



/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them,
and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

// const makeAllCaps = () => {
//     new Promise((resolve, reject) => {
//         if (makeAllCaps === "") {
//             toUpperCase(arrayOfWords[0])
//         } else { console.log("This is not a string.") }
//     })
// };

// makeAllCaps
//     .then(arrayOfWords[1])
//     .then(arrayOfWords[3])


// const sortWords = () => { };

// const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
// const complicatedArray = ['cucumber', 44, true];

// call both functions, chain them together and log the result to the console


//oplossing
const makeAllCaps = words => {
    return new Promise((resolve, reject) => {
        if (
            words.every(word => {
                return typeof word === 'string';
            })
        ) {
            resolve(
                sortWords(
                    words.map(word => {
                        return word.toUpperCase();
                    })
                )
            );
        } else {
            reject('Not a string!');
        }
    });
};


const sortWords = words => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort());
        } else {
            reject('strings only!');
        }
    });
};


const theseAreWords = ['promise', 'practice', 'break'];

makeAllCaps(theseAreWords)
    .then(sortWords(theseAreWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));

const theseAreNotWords = [1, 'hello', 9];

makeAllCaps(theseAreNotWords)
    .then(sortWords(theseAreNotWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps("whatever")

    //QUESTIONS: 
  //What is .then() used for, and what is .catch() used for?
    //.then() is triggered when fetch gets a successful response from the server. 
    //.catch() is triggered when something went wrong with the request.

  //What are good use cases for Promises?
    //Good use cases for Promises are - converting XMLHttpRequests to a promise-based task, anytime there is a chance that an asynchronous action will be taken.

  //What other libraries/functions can you find that uses Promises?
    //AngularJS uses promises for async operations. 
    //Some methods that help us utilize promises are: .resolve(), .all(), .race(), .reject()
