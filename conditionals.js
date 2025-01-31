//Global Scope

let lastName = "Power";
let name = "Yah";

{
    let firstName = "Tara"
    let lastName = "Matthews"

    //Local Scope

    let fullName = `${name} ${lastName}`;
    console.log(fullName);
    console.log(firstName)

}
// console.log(firstName);
// console.log(lastName);

//console.log(fullName); //reference error

console.log(window);

//var polution `sucks`

// console.log(window.pollution);
// console.log(pollution);

// //Var
// {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }
  
//   {
//     let x = 1;
//     {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

  let total = 10;
  


//single line block
  if (total > 5) console.log("success");
  else console.log("error");

  //multiline block
  if (total == 10) {
    console.log(`Total is equal to ${total}`);
  } else {
    console.log("Sorry total is not equal to 10");

  }

  console.log(`end of script`);

let secretCode = ""

if(secretCode) {
    console.log("true");
} else {
    console.log("falsy");

}
let num = 0 ;

if ( num > 0) {
    console.log("positive");

} else  {


    console.log('negative');

}
//=========

// let userAge = 18;
// let paidUser = true

// if (userAge >= 18) {
//     console.log("Acess Granted");
//     //.....
//     if (paidUser) {
//         console.log("Unimited music");
//     } else {
//         console.log("Watch ads every 30 mins");
//     }
//     } else {

//    console.log("Acess Denied!");

   userAge = 6;

   //ages 13 and lower
   if (userAge <= 13) {
    console.log("Kids Team");

    // 14-17
   } else if (userAge < 18)  {
    console.log("Teenage Team");

// 18 and up
   } else if (userAge >= 18) {
    console.log(`Adult Team`);

   } else {
    console.log("Age is not valid");
   }
   console.log("end of script");


   let totalStudents= 30

   if (totalStudents <= 40) {
    console.log("Course Full!");
  
} else {
    console.log("Open Seats")
   }
 
    num = 150;

if (num > 0 && num > 100) {
console.log("positive and greater than 100");
} else if
(num === 100) {
console. log ("number is 100");

} else if (num > 0 & num < 100) {
console.log("num is positive and less than 100");

} else if (num === 0) {
console. log ("number is zero");

} else if (num< 0) {
console. log ("number is negative");

}else {
console. log("not a number");
}  

//Switch Statement

let statusCode = 200;

switch (statusCode) {
    case 200:
    console.log("Request was successful");
    break;
    case 201:
        console.log("Sucess and created");
        break;
    case 404:
        console.log("Not found!");
        break;
        case 500:
            console.log("Server Error!");
            break
            default:
                console.log("Invalid Status Code");
                

}
//Ternary Operator
let isAuthenticated = false;
let authorized =isAuthenticated ? "Granted" :  "Denied";

console.log(authorized)

// ============ if else ==========
let auth;

if (isAuthenticated) {

    auth = "Granted"
} else {
    auth = "Denied"
}
// Throw Keyword

let amount = 10;
if(amount < 0) {
} else {
    throw "Error - I don't know what this is.";
}
console.log("Does this log?");

try {
    if (orderAmount < 0) {
        console.log("Try Again!");
    } else {
        throw "Error with payment"
    }
    } catch (error) {
    console.log(error);  // <---
    // alert("try again")
    }
    let orderAmount = 100;

try {
    // any errors will be pass to the catch block
    if (orderAmount < 0) {
        console.log("Try Again!");
    } else {
        throw "Error with payment" // <----
    }
    
} catch (error) {
    // access the error in the "error" variable
    console.log(error); // <--- 

    alert(`Amount ${orderAmount} not valid`)
}


console.log("Does this log?");





