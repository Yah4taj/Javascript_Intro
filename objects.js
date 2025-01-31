

const myCar = {
    color: "blue",
    year: "1989",
    hp: "4000",
    isElectric: false,
    activeRegistration: true,
    27273: "Hello"
}
console.log(typeof myCar.color);
console.log(myCar.year);
console.log(myCar.hp);
console.log(typeof myCar["activeRegistration"]);
console.log(myCar[27273]);

//also access the value of the provided key
console.log(myCar["isElectric"]);

//Reassigning the value of properties
myCar.color ="Hot Pink"
myCar.isElectric = true;

//Add new properties
myCar.mpg = 20;
myCar.autopilot = "Teslas Auto Software"

//Deleting the properties of an object
delete myCar["active registration"];

console.log(myCar);
for (const key in myCar) {
//     console.log(`Key: $(key): value:[myCar[key]] $`)

if (myCar[key] ===4000){
    console.log(`HP is: ${myCar[key]}`);
    break
}else {
    console.log(myCar[key]);

}
}
// returning an array of the object's value
const values = Object.values(myCar);
values.forEach((value) => console.log(value));

//create an array and loop over the array of values
for (let value of Object.values(myCar)) {
    console.log(value);
}
if(myCar.year < 2000) {
    console.log(`Check the engine`);
}
// add on engine property
myCar.engine = {
    sizw: 3.1,
    cylinders: 6,
}
console.log(myCar);
console.log(myCar.engine.size);

//makes a copy of an object using the spread operator
const myUsedCar = {...myCar}

console.log(myUsedCar);

console.log(myCar ==myUsedCar);

const product = {
    price: 300,
    description: "Sunglasses"
}
console.log(product.price)
const products = [product];
console.log(products[0]["price"]);

console.log(myCar);

myCar.isElectric =false
console.log(myCar.price);

if(myCar.price) {
    console.log(`Car is electric`);

} else {
    console.log("No for sale!");
}

const user = {
    isAdmin: false
}
if (user.isAdmin) {
    console.log(`Admin`);
}else {
   console.log(`User`); 
}







