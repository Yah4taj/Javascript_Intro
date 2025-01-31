
// Create and manipulate dates.
// Extract date components.
// Format dates for display.
// Compare and manipulate dates.

const currentDate = new Date();  
  // Creates a new Date object with the current date and time

console.log(currentDate);

//Task 1 Date Object

//Open your browser's developer console or a code editor.
// Create a Date object for the current date and log it.
//
const now = new Date();
console.log("Current Date and Time:", now);

// Task 2 Extract Date Components
const today = new Date();
console.log("Year:", today.getFullYear());
console.log("Month (0-11):", today.getMonth());
console.log("Day of the Month:", today.getDate());
console.log("Day of the Week (0-6):", today.getDay());
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

// Task 3: Creating Specific Dates:  Date object for Birthday

const specificDate = new Date(2025, 0, 15, 10, 30, 0); // January 15, 2025, at 10:30:00
console.log(specificDate);

const bdayT= new Date(1975, 7, 14,7,30, 0 );
console.log(bdayT);

const oldDate = new Date (2000, 0,1,  12, 0,0);
console.log(oldDate);


         //Task 4 Formatting Dates

// toDateString(): Returns a readable date string.
// toLocaleDateString(): Formats the date based on the locale.
// toISOString(): Returns the date in ISO 8601 format.

const date = new Date();
console.log("Readable Date:", date.toDateString());   //Thu Jan 23, 2025
console.log("Locale Date:", date.toLocaleDateString());  // 1/23/25
console.log("ISO Date:", date.toISOString());   //2025-01-23T14:52:20.770Z

//  Task 5   Manipulating Dates

// Common Set Methods
// setFullYear(year): Sets the year.
// setMonth(month): Sets the month.
// setDate(day): Sets the day of the month.
//setHours(hours), setMinutes(minutes): Set the time.

const futureDate = new Date();
futureDate.setFullYear(2030);
futureDate.setMonth(11); // December (0-indexed)
futureDate.setDate(25);
console.log("Modified Date:", futureDate);

//Task 6 Comparing Dates

const date1 = new Date("2025-01-01");
const date2 = new Date("2024-12-31");

if (date1 > date2) {
  console.log("Date1 is after Date2");
} else {
  console.log("Date1 is before or the same as Date2");
}

const nextDate = new Date("2025-03-01");
const nextDate2 = new Date("2025-09-01");

if (nextDate > nextDate2) {
    console.log("Date1 is after Date2");
  } else {
    console.log("Date1 is before or the same as Date2");
  }


  //Mastering JavaScript Array Methods

//   Use forEach for iteration.
// Sort arrays with sort.
// Transform arrays with map.
// Filter arrays with filter.
// Aggregate array data with reduce.

 //Task 1 
 //The forEach method allows you to iterate over an array and execute a function for each element. 

 //array.forEach((element, index, array) => {
    // Code to execute for each element
  //});

  //Loop through an array

//   const numbers = [1, 2, 3, 4, 5];
//   numbers.forEach((num, index) => {
//     console.log(`Index: ${index}, Value: ${num}`);
//   });

  //Part 2: Sorting Arrays with sort

  //The sort method sorts the elements of an array in place. By default, it converts elements to strings and sorts them lexicographically.

//   array.sort((a, b) => {
//     // Return a comparison value
//   });
  
// const numbers = [10, 5, 8, 1, 3];

// // Ascending order
// numbers.sort((a, b) => a - b);
// console.log("Ascending:", numbers);

// // Descending order
// numbers.sort((a, b) => b - a);
// console.log("Descending:", numbers);

// Part 3: Transforming Arrays with map
// The map method creates a new array by applying a function to each element of the original array.

// const newArray = array.map((element, index, array) => {
    // Return the transformed value
//   });

// Create an array of numbers.
// Use map to create a new array where each number is squared.

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num ** 2);
// console.log("Original:", numbers);
// console.log("Squares:", squares);

// Part 4: Filtering Arrays with filter
// The filter method creates a new array containing only elements that satisfy a given condition.

// 
// Create an array of numbers.
// Use filter to create a new array containing only even numbers.

// const numbers = [1, 2, 3, 4, 5, 6];
// const evens = numbers.filter(num => num % 2 === 0);
// console.log("Original:", numbers);
// console.log("Even Numbers:", evens);

//Part 5: Reducing Arrays with reduce
// The reduce method executes a reducer function on each element of the array, resulting in a single output value.

// const result = array.reduce((accumulator, currentValue, index, array) => {
//     return newAccumulator;
//   }, initialValue);
  
//   Create an array of numbers.
//Use reduce to calculate the sum of the numbers.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("Sum:", sum);

// Part 6: Combining Methods
// You can chain multiple array methods to perform complex operations in a clean and efficient way.

// Task 6: Chain Array Methods
// Create an array of numbers.
// Use filter to get even numbers, map to square them, and reduce to calculate their sum.

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(num => num % 2 === 0) // Keep even numbers
  .map(num => num ** 2)         // Square each number
  .reduce((acc, num) => acc + num, 0); // Sum the squares

  
console.log("Result:", result);





  



    