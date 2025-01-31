// For Loops

// Counts up from 0 to 10

console.log("=== Count up from 0 to 10 ===");

for (i = 0; i < 10; i++){
    console.log(`The value of i is: ${i}`);
}
console.log("=== Count down from 10 to 1 ===");

for ( x = 10; x >= 1; x--) {
    console.log(x);
}

// Count from 5 to 15

console.log("=== Count from 5 to 15 ===");

for (let x = 5; x <= 15; x++) {
    console.log(x);
}
console.log("=== Output odd numbers from 1 to 10 ===");
for (let i= 1; i <=10; i +=2) {
    console.log(i);
}

//OR

for (let i =1; i <= 10; i++){
    //check if the remainder is not equal to 0
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log("=== Output even numbers from 1 to 10");

 for ( let i = 1; i <= 10; i++){
 if (i % 2 === 0) {
    console.log("EVEN: ",i);
 }
}
for (let i=6; i<= 60; i +=3){
    console.log(i);
}

console.log("=== Output of an increasing # symbols, from 1 to 7, as shown below. ===");

// Hashtag method
for (let i =1; i <= 7; i++){
    let hashtag ='#'
    hashtag += '#'
}

// OR Repeat method

for (let i =1; i <= 7; i++){
    console.log("#". repeat(i));
}

console.log("=== Output multiples of 3, starting at 6 and ending at 60. ===");

for (let i = 6; i <= 60; i += 3) {
    console.log(i);
}


console.log("=== Loop Over a String ===");

let str = "Hello World";
console.log(str[0]) //access each character by the index
console.log(str.length); //access the length of the string

for (let i = 0; i < str.length; i++) {
    //console.log(str[i]);
	console.log(str[i]);
    //console.log(`The character ${str[i]}) is at index S{i}`);

   //allCaps += str[i] . toUpperCase()

   //AllCaps above let's us access every letter
    
}
console.log("=== For in Loop ===");


// For in loops normally used with objects and they return the index or property name
for (const i in str) {
	console.log(str[i]);
}

// Looping over objects will return the property name
let myObject = {name: "Max"} 

    for (const i in myObject) {
    //console.log(i);
}
console.log("=== For of loop ===");

// For OF Loop return the values of a iterable
for (const i of str) {
    console.log(i);
}
//Loop Over an Array and access each value
let myArray = ["Hello" , "world", "JS", "HTML"]
for (const word of myArray) {
    console.log(word);
}
console.log("=== Continue (Control Flow) ========");

for (let i = 0; i < str.length; i++) {
    
    if (str[i] === 'l') {
        continue // skips the current iteration
    } else if (str[i] === 'W') {
        break // exit the loop
    }
    
    console.log(str[i]);
    
}

console.log("=== Continue In (Control Flow) ===");

for (let i=0; i < str. length; i++) {
    if (str[i] === 'l') {
        continue
    }
    console.log(str[i]);
}
console.log("=== Continue (Of) (Control Flow) ===");
for(const c of str){
    if (c == "l") {
        continue;
    }
    console.log(c)
}
console.log("==== While Loop =======");

let value = 30;

while(value > 0) {
    console.log(value);

    if (value === 20) {
        value--
        continue
    }
    if (value ===15) {
        break;
    }
    value--
}
