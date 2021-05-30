//arrow functions
const multip3 = (sum1, sum2) => {
    const total3 = sum1 * sum1 + sum2 * sum2;
    return total3 * total3;
}
console.log(multip2(1, 1))

//declarations (always use arrow or expression!)
function multip2(sum1, sum2) {
    const total2 = sum1 * sum1 + sum2 * sum2;
    return total2 * total2;
}
console.log(multip2(1, 1))

//expressions
const multip1 = function (sum1, sum2) {
    const total1 = sum1 * sum1 + sum2 * sum2;
    return total1 * total1;
}
console.log(multip1(1, 1))

/*The function we're going to create will do the following.

    take two numbers
    each number will be squared (multiplied with itself)
    the squared numbers will be added together
    this sum will be squared again
    the resulting value is returned

Write this function in all three styles and give the functions and their arguments good names. They cannot have exactly the same name. There are multiple ways to do this.

    function declaration
    function expression
    arrow function

Function Declarations:
    function add(number1, number2) {
        return number1 + number2;
      }

      add(5, 6); // 11

Function expressions:
const add = function (number1, number2) {
  return number1 + number2;
};

add(5, 6); // 11


Arrow functions:
const add = (number1, number2) => {
  return number1 + number2;
};
add(5, 6); // 11
*/