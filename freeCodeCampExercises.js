













// Basic JavaScript: Use Conditional Logic with If Statements
//Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue == true) {
        return "Yes, that was true";
    } else {
        return "No, that was false";
    }
}
//console.log(trueOrFalse(true));

// Comparison with the Equality Operator
// If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal". In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:
//
// 1   ==  1   // true
// 1   ==  2   // false
// 1   == '1'  // true
// "3" ==  3   // true
// Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
//console.log(testEqual(10));

// Comparison with the Strict Equality Operator
// Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
// console.log(testStrict(10));

// Practice comparing different values
// In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
//
// typeof 3   // returns 'number'
// typeof '3' // returns 'string'
// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
// console.log(compareEquality(10, "10"));

// Comparison with the Inequality Operator
// Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}
// console.log(testNotEqual(10));

// Comparison with the Strict Inequality Operator
// Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}
// testStrictNotEqual(10);

// Introducing Else Statements
// Combine the if statements into a single if/else statement.

function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }

    else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}
// console.log(testElse(4));

// Introducing Else If Statements
// Convert the logic to use else if statements

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}
//console.log(testElseIf(7));

// Logical Order in If Else Statements
// Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
//console.log(orderMyLogic(7));

// Chaining If Else Statements
// Write chained if/else if statements to fulfill the following conditions:
//
// num < 5 - return "Tiny"
// num < 10 - return "Small"
// num < 15 - return "Medium"
// num < 20 - return "Large"
// num >= 20 - return "Huge"

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    } else {

        return "Change Me";
        // Only change code above this line
    }
}
// console.log(testSize(7));

// Golf Code
// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
//
// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes === par - 1) {
        return "Birdie";
    } else if (strokes === par) {
        return "Par";
    } else if (strokes === par + 1) {
        return "Bogey";
    } else if (strokes === par + 2) {
        return "Double Bogey"
    } else if (strokes >= par + 3) {
        return "Go Home!";
    }

    return "Change Me";
    // Only change code above this line
}
// console.log(golfScore(5, 4));

//Selecting from Many Options with Switch Statements
// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    // Only change code above this line
    return answer;
}
// console.log(caseInSwitch(1));

// Adding a Default Option in Switch Statements
// Write a switch statement to set answer for the following conditions:
//     "a" - "apple"
//     "b" - "bird"
//     "c" - "cat"
//     default - "stuff"

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
        switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
        }
            return answer;
    }
// console.log(switchOfStuff(1));

// Multiple Identical Options in Switch Statements
//     Write a switch statement to set answer for the following ranges:
//         1-3 - "Low"
//         4-6 - "Mid"
//         7-9 - "High"
//
//         Note
//         You will need to have a case statement for each number in the range

function sequentialSizes(val) {
    var answer = "";
// Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
        case 7:
        case 8:
        case 9:
            answer = "High"
    }
// Only change code above this line
    return answer;
}
// console.log(sequentialSizes(1));

// Replacing If Else Chains with Switch
// Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "bob":
        answer = "Marley";
        break;
        case 42:
        answer = "The Answer";
        break;
        case 1:
        answer = "There is no #1";
        break;
        case 99:
        answer = "Missed me by this much!";
        break;
        case 7:
        answer = "Ate Nine";
    }

    // Only change code above this line
    return answer;
}
// console.log(chainToSwitch(7));

// Returning Boolean Values from Functions
// Fix the function isLess to remove the if/else statements.
function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}
//console.log(isLess(10, 15));

// Return Early Pattern for Functions
// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }
    // Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
// console.log(abTest(2,2));

// Counting Cards
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
//
//     Example Output
// -3 Hold
// 5 Bet
var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet';
    }

    return count + " " + holdbet;
    // Only change code above this line
}
//console.log(cc(2); cc(3); cc(7); cc('K'); cc('A'));











// Iterate with JavaScript While Loops
// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

var array = [];
var i = 5;
while(i >= 0) {
    array.push(i);
    i--;
}
//console.log(array);

// Iterate with JavaScript For Loops
// Use a for loop to work to push the values 1 through 5 onto myArray

var myArray = [];
for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}
//console.log(myArray);

// Iterate Odd Numbers With a For Loop
// Push the odd numbers from 1 through 9 to myArray using a for loop.
var myArr = [];
for (var i = 1; i <= 9; i+=2) {
    myArr.push(i);
}
//console.log(myArr);

// Count Backwards With a For Loop
// Push the odd numbers from 9 through 1 to myArray using a for loop.

var arr = [];
for (var i = 9; i > 0; i-=2) {
    arr.push(i);
}
//console.log(arr);

// Iterate Through an Array with a For Loop
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
// Adding everything in Array
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
//console.log(total);









