/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // Converted string to number for readabilty 
console.log("The result is: " + result);

let isValidString = "false"
let isValid = (isValidString === "true")

if (isValid) {
} else {
    console.log("This is valid")
  }
// Incorrect Boolean conversion for the string "false". To truly represent the boolean false 
// from the string "false", we must compare it.

let age = "25";
let totalAge = Number(age) + 5; // converted age to a number so age + 5 would not concatenate.
console.log("Total Age: " + totalAge);


//  1. Write code that demonstrates: 
//    ○ One example of implicit type conversion 
//    ○ One example of explicit type conversion 
//  2. Your examples should: 
//    ○ Include at least one edge case, like  NaN,  undefined, or  null  
//    ○ Use  console.log()  to clearly show the before-and-after type conversions.

let myName = "Charlie";
let myFavoriteNumber = 7;

console.log("--- Implicit Conversion (Number to String) ---");
console.log("The type of myFavoriteNumber is: " + typeof myFavoriteNumber);

let sentence = myName + " is a fan of the number " + myFavoriteNumber;

console.log("Result: " + sentence);
console.log("The type of the 'sentence' is: " + typeof sentence);

let emptyValue = null;
let wordValue = "three";

console.log("\n--- Explicit Conversion (Values to Number) ---");

let numFromNull = Number(emptyValue);
console.log("1. null value converted to number: " + numFromNull);

let numFromWord = Number(wordValue);
console.log("2. 'three' converted to number: " + numFromWord);