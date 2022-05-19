// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
// Create a function that takes in for argument any given number
// Determines  if the number meets any of the following criteria:
    // below boiling point (< 212 degrees Fahrenheit) then returns the number with the remarks "below boiling pt")
    // at boiling point (= 212 degrees Fahrenheit ) then returns the number with the remarks "is at boiling point")
    // above boiling point (> 212 degrees Fahrenheit) then return the number with the remarks "is above boiling point"
    // using if conditionals to compare the value of the numbers to 212

// In line 34 boilPoint is a function that will take temp as an argument
// In  the next line 32 temp is evaluated  using conditional > to 212 which is the boiling point
// In the next line 34  if condition is met to be true, return value is set with the temp value and the remarks
// In the next line if/else condition is again evaluated and if true, 
// the next remarks are set.
// Next line the else remarks are set as this is the only condition that will be evaluatedd to be true.
// the console log lines uses the three temperatures to evaluate.
// temp is a parameter
// const boilPoint = (temp) => {
//        if (temp > 212) {
//            return `${temp}  is above boiling point`
//        }   else  if (temp === 212) {
//         return `${temp}  is at boiling point` }
//            else { return `${temp}  is below boiling point` }
//    }
//    console.log(boilPoint(42))
//    console.log(boilPoint(350))
//    console.log(boilPoint(212))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
// create a function called myNnumbers
// that will combine the length of two arrays
// and return the resulting number
// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]


// var myNumbers1 = [3, 7, 0, 36, -9]        // to establish  1st array
// var myNumbers2 = [8, -7, 42, 9, 13]       // to establish 2nd array
// var myNumbers = (myNumbers1.length + myNumbers2.length)  // setting the length function to lengths of the 2 arrays. 
    
// console.log(myNumbers)






// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"
// create a function that will reverse the characters inside a string.
// const currentCohort = "Charlie 2022"



// var currentCohort = ["C", "h", "a", "r", "l","i", "e"," ", "2", "0", "2", "2"]  // To poppulat the array
// var curCohortReversed = currentCohort.reverse()                                 // using reverse function to reverse order of characters in the array
// console.log(curCohortReversed.join(""))                                         // using join function for the output to join characters together.

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
//  create a function using modolo to evaluate whether a variable is odd or even.
// const myArray = [13, 34, 5, 10, 27, 42]
// 

 //create a function that declares an array as argument
//  var numArray = [12, 34, 5, 10, 27, 42]
//  const findOddEven = (arr) => {
//  //create an array to store values of add or even
// let oddOrEven = []
// //create loop going through the array to pass the function
//   for(let currentVal = 0; currentVal<arr.length; currentVal++) {
//       // use conditional to evaluate if even
//       if(arr(currentVal) % 2 ===0) {
//           //push the value "even" to the oddOrEven array
//           oddOrEven.push[even]

//          }
//             // other wise, push odd to the oddOrEven array
//              else  { oddOrEven.push[odd]    
//             }
//             //return oddOrEven array
//             return oddOrEven
//              }
//         // to call the function               
//            console.log(findOddEven(numArray))    
        
  









// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
// const number1 = 58
// const number2 = 100

// Set two:
// const number3 = 27
// const number4 = 24
//create function smallDiff  with arguments num1 and num2
// const smallDiff = (num1, num2) => {
//  // compare the two numbers
//     if num1 > num2
//     // if num1 is bigger, deduct num2 from num 1 and return the difference
//       return `$(num1) - (num2)` }
//     // otherwise deduct num1 from num2 and return the difference
//       else  { return `$(num2) - (num1)` }
// //invoke the function
//       console.log(smallDiff(58,100));
//       console.log(smallDiff(27, 24))
