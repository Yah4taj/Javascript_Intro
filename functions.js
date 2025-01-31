
// const provideName = prompt("Enter your name")
// sayHello(provideName)



// Function definition or declaration  First Way (used the most- the only one that is hoisted and can be called before)

function sayHello(userName) {
    console.log("Hello" + userName + "!");    
}
// function call (execution)

sayHello("Max")

  //Function Expression      Second Way( not used often)
let sayBye= function(userName){
    console.log("See you later" + userName);
}
  //Function Call
sayBye("Tom")

     // Arrow Function    Third Way (define on same line)
     const add = (a,b) => console.log(a + b);

     //function call
     add(2,4)

     //Arrow Function
     const addFive = (num) => {
        console.log(num + 5);
     }
     addFive(5)

     //Using function with a function or method

     const nums = [3,5,16];

     nums.forEach((num) => console.log(num))
     
     nums.forEach(function(num) {
        console.log(num);
     })

     nums.forEach(addTen)

     //Functions with a return keyword

     function addTen(a) {
        //console.log(a + 10);
        return a + 10;
     }
     const result = addTen(5)

     console.log(result);

     // Exercise
     
     function areBothEven(n1, n2) {
        return !(n1 % 2) && !(n2 % 2);
      }
      const isEvenResult = areBothEven(4,8);
      console.log(isEvenResult);

      console.log(!(4 % 2));  //Logical Not operator- whatever is passed it will give the opposite: if non-Boolean value (false)

      // Exercise

    //   function computeArea(w,h){
    //     computeArea= w * h;
        
    //     return(`The area of a rectangle with a ${width} of  and a ${height} of  is ${'(computeArea)'} square units.`);
    //   }
    //   const area =computeArea(4,5);
    
    
        // function planetHasWater (Earth, Mars) {
        //     return (Earth % 2) || !(Mars % 2);
        // }
        // const planet = planetHasWater

   //=============== Hidden arguments variable     (can be used with arrow functions)   

   function getDevObject(name) {
    // console.log(name);
    // console.log(arguments);

    const skills = []
    // for (let skill of arguments) {
    //     // console.log(skill);
    for (let i=1; i < arguments.length; i++) {
    skills.push(arguments[i]);
     }
    
         return{
            devName: name,
            devSkill: skills,    //retruning object with properties inside obkect
         }
        }

        let maria = getDevObject("Maria", "HTML", "JS", "NodeJS","React");

        console.log(maria);

        //Rest Parameter(must always be at the end) name variable, age variable, 
        // (skills is an array) (array shows as single index in console) (available for arrow functions)

        function getDevObject2(name,age,...skills){
      return{
        devName: name,
        devAge: age,
        devSkills: skills
      }
    }

        const max = getDevObject2("Max", "28", "JS","CSS","HTML" );
        console.log(max);

//Default Parameters

function setColor(bicycle, color) {
	bicycle.color = color || "purple"
}
const myBike = {};
setColor(myBike, "black")
console.log(myBike);


function setWheels(bicycle, wheels=4) {
	bicycle.wheels = wheels;
}
setWheels(myBike, 3)

console.log(myBike);

// Functions can be passed as arguments to other functions
//(function loops over the array to pass the item
//func is th parameter
function myForEach(arr, func) {
    for (let item of arr) {
        func(item)

    }
}
const colors = ["reD","Blue", "grEEn"]

// myForEach(colors,(element) => {
// console.log(element.toUppercase());
// });
// myForEach(colors, (element) => {
//     console.log(element.toLowercase());
//     },
    
// Immediately Invoked Function Expression (Runs immediately-keeps code from leaking into the global scope)

// (function() { 

//     console.log("IFE")
// })();

console.log("=====================")

// let myVar = 20;

// function passBy(myVar) {
    // return myVar;
// }
// function passBy(x){
//   x = x * 10;
// }

//Refernce Types

let myVar = {value: 20, type: 'Number'}
function passBy(x) {
  x.value = x.value * 20;
}
console.log(myVar);             // 20 global var
console.log(passBy(myVar));     // 200 function var
console.log(myVar);

// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];


// function returnEven(array) {
//     for (let i in array) {
//         if (array[i] % 2 !== 0) {
//             array.splice(i, 1);
//         }
//     }

//     return array;
// }

// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
// console.log(numArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]


// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     let newArray = [];

//     array.forEach((element) => {
//         if (element % 2 == 0) {
//             newArray.push(element);
//         }
//     });

//     return newArray;
// }

// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]

let numArray = [
  { value: 10 },
  { value: 20 },
  { value: 0 },
  { value: -10 }, 
  { value: 15 }, 
  { value: 28 }, 
  { value: -1000 },
  { value: 42 },
  { value: 7 }
];

function returnEven(array) {
  let newArray = [];

  array.forEach((element) => {
      if (element.value % 2 == 0) {
          newArray.push(element);
      }
  });

  return newArray;
}
//original array
console.log(numArray);


let newArray = returnEven(numArray);

newArray[0].value += 10;
console.log(newArray);

numArray[3].value = 67;

console.log(numArray);

// let myEvenValue = newArray[1].value;
// myEvenValue /= 2;

console.log("=====================");

//Assume these variables are reset for each of the examples below.
// let numbers = [[1], [2], [3]];
// let numbersCopy = [];

//For Loops
// for (let i=0; i < numbers.length; i++) {
//   console.log(numbers[i]);

//   numbersCopy[i] = numbers[i];

// }
// numbersCopy[0] = [100]
// console.log(numbersCopy);
// console.log(numbers);

// console.log(numbers[0] === numbersCopy[0]);

//While Loops
// let j= -1;
// while (++j < numbers.length) {
//   numbersCopy[j] = numbers[j]
// }

//Spread Operator
//numbersCopy = [...numbers]


// Array.map
// numbersCopy = numbers.map((ele) => ele);

// numbersCopy[0] = [100]
// numbersCopy[0].push(100)

// console.log(numbersCopy);
// console.log(numbers);

// console.log(numbers[0] === numbersCopy[0]);



const person = {
    name: {
        first: "Eric",
        last: "Smith"
    }
}

const strObj = JSON.stringify(person)

console.log(strObj);

const newPerson = JSON.parse(strObj)

console.log(newPerson.name === person.name);

const myPerson = {
  name: {
      first: 'Timmy',
      last: 'Timtim'
  },
  age: 30,
  location: {
      city: 'New York',
      state: 'New York',
      zip: 10001
  }
}

function copyPerson(oldPerson) {
  let jsonString = JSON.stringify(oldPerson);

    return JSON.parse(jsonString);
}

const myPersonCopy = copyPerson(myPerson);


console.log(myPersonCopy === myPerson);
//==============================================

let numbers = [[1], [2], [3]];
let numbersCopy = [];

const strNumbersCopy = JSON.stringify(numbers)
console.log(strNumbersCopy);

const newNumbersCopy = JSON.parse(strNumbersCopy)

newNumbersCopy[0].push(1000);

console.log(newNumbersCopy);
console.log(numbers);