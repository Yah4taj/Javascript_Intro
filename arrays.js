//Array of strings
const names = ["John", "Abigail", "Jerome"];

//loops over the array of string
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);

//For of
// for (let name of names) {
//     console.log(i);
}
// const greetings = []

    // console.log(names.length);
    
    // for (let i =0; i < names.length; i++){}
    // greetings[i] = "hello" = names(i) + "!"
    // console.log(greetings[i]);

// ]
// console.log(greetings);

console.log("===========Movies ==========")

const movies = ['Caddyshack', 'Interstellar', 'Scarface',];
console.table(movies);

// reassigning the value of an element in the array
movies[0] = "Batman";

console.log(movies);

//assigning an element of the array to another variable

let playMovies = movies[0];

// Get the length of the array
console.log(movies.length);

//Adds a new value to the end of the array
movies[movies.length] = "Transformers"

// Adds a new value to index 10 and will also add 6 empty slots
movies[10] = 'Shrek'

//undefined
console.log(movies[9]);

//update the length of the array, if value is shorter you'll lose your data
// movies.length = 3
console.log(movies);
console.log(movies.length);

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
//===============Array Methods=================

//Concat
const yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
const myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

const ourMovies = yourMovies.concat(myMovies);

//create a copy of an array
const ourMoviesCopy = ourMovies.concat();

console.log(ourMovies);
console.log(ourMoviesCopy);
 
//Join
let movieString = myMovies.join(" and ");
console.log(movieString.toUpperCase ());

//Push
ourMoviesCopy.push(`Trading Places`, `Antitrust`)

//Unshift
ourMoviesCopy.unshift(`Star Wars`)

//Pop
let lastMovie = ourMoviesCopy.pop();
console.log(lastMovie);

//Shift
let firstMovie =  ourMoviesCopy.shift()
console.log(firstMovie);

console.log(ourMoviesCopy);

//Splice 
const topMovies = [`Caddyshack`, `Interstellar`, `Scarface`, `Trading Places`]

let  removedMovies = topMovies.splice(3, 1, `Spaceballs`, `Alien`)

removedMovies = topMovies.splice(0, 3)
console.log(removedMovies);

console.log(topMovies);
removedMovies = topMovies.splice(1, 0, `The Sting`)
console.log(topMovies);
//This starts an element

//Sllice

const oldMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

let favMovies = oldMovies.slice(1,3);
console.log(favMovies);
console.log(oldMovies);

//At
const currMovie= favMovies.at(1)
console.log(currMovie);

//Reverse
console.log(oldMovies);
console.log(oldMovies.reverse());

//Flat

//Nested arrays
const numArray = [1,2,4,5,6,6]
console.log(numArray);


