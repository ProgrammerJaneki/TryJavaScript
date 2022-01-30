//"use strict";
// TASK

// Prices of flowers:
let rose=8, lily=10, tulip=2;

// Numbers of flowers:
let num_rose=70, num_lily=50, num_tulip=120;

// Values of flowers:
let val_rose = rose * num_rose;
let val_lily = lily * num_lily;
let val_tulip = tulip * num_tulip;

// Display
console.log("Rose - unit ", "price: ", rose, "quantity: ", num_rose, "value: ", val_rose);
console.log("Lily - unit ", "price: ", lily, "quantity: ", num_lily, "value: ", val_lily);
console.log("Tulip - unit ", "price: ", tulip, "quantity: ", num_tulip, "value: ", val_tulip);

// Total
let total = val_rose + val_lily + val_tulip;
console.log("Total: ", total);

// Decrease
num_rose = num_rose - 20;
num_lily = num_lily - 30;

// Total
val_rose = rose * num_rose;
val_lily = lily * num_lily;
val_tulip = tulip * num_tulip;
total = val_rose + val_lily + val_tulip;
console.log("Rose - unit ", "price: ", rose, "quantity: ", num_rose, "value: ", val_rose);
console.log("Lily - unit ", "price: ", lily, "quantity: ", num_lily, "value: ", val_lily);
console.log("Tulip - unit ", "price: ", tulip, "quantity: ", num_tulip, "value: ", val_tulip);
console.log(total);

function thisFunction(){
    let variable = 2;
}
let year = 2000;
if(typeof year == "function"){ 
    console.log("This is a function");
}
else {
    console.log("This is not a function");
}

// decimal, hexadecimal, octal, binary
let a=10, b=0x10, c=0o10, d= 0b10;
// exponents
let ex1=2e3;
console.log(ex1); // -> 2000

const my_first = "Jannel";
let mySecond = "Revilla";
const sentence = `My name is ${my_first}`;

const address_number = "10 Downing Street";
const prime_minister_address = `The Prime Minister's address is ${address_number}.`;
console.log(prime_minister_address)

console.time();
console.log("test console");
console.timeEnd();

const big = BigInt(20);
let num = "29";
console.log(num);
console.log(typeof Number(num));

let boo = true;
let nu = 12;
let bi = 10n;
let st = "Hello";
let un;
console.log(`${boo}` + ` ${typeof boo}` + ` ${nu}` + ` ${typeof nu}` + ` ${bi}` + ` ${typeof bi}` +` ${st}` + ` ${typeof st}` + ` ${un}` + ` ${typeof un}`);

let b1 = true;
let b2 = Boolean(true);

const str1 = 42 + + "1";
console.log(str1);

let users = [
    {
        name: "Janeki",
        age: 21
    },
    {
        name: "James",
        age: 30
    }
];

users[2] = {
    name: "Sam",
    age: 19
};
// For Loop Function
function funcLoop(func) {
    for (var x=0; x<func.length; x++){
        console.log(func[x]);
    };
};

console.log(users[2]);
console.log(users instanceof Array);
let thisNames = ["Olivia", "Emma", "Mateo", "Samuel"];
let anotherNames = ["Jessica", "Maria"];
funcLoop(thisNames);
console.log("/////////////////////");
let allNames = thisNames.concat(anotherNames);

// TASK OBJECTS 2.3.1.18 Complex Data Types - Tasks

let ticket = {
    start: "0b187832",
    final: "0ab20931",
    price: 1200
};
let person = {
    // Will add later
};
person.firstName = "Jannel";
person.lastName = "Revilla";
console.log(ticket);
console.log(person);

// Arrays
let books = [
    {
        Title: "Speaking JavaScript",
        Author: "Axel Rauchmayer",
        Pages: 460
    },
    {

        Title: "Programming JavaScript Applications",
        Author: "Eric Elliott",
        Pages: 254
    },
    {

        Title: "Understanding ECMAScript 6",
        Author: "Nicholas C. Zakas",
        Pages: 352
    }    
];

console.log(books[0]);
books.push({
        Title: "Learning JavaScript Design Patterns",
        Author: "Addy Osmani",
        Pages: 254
});
console.log(books.length);
// New Array
let thisNew = books.slice(2);
//console.log(thisNew);
var sumPages = 0;
for(let y=0; y<books.length; y++) {
    sumPages += books[y].Pages;
};
console.log(`Sum of the ${books.length} pages: ${sumPages}`);

// LAB
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
{
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, 
{
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
contacts.push(
    {
        name: "Maisie Haley",
        phone: "0913 531 3030",
        email: "risus.Quisque@urna.ca"
    }
);
console.log(`Name: ${contacts[contacts.length-1].name} / Phone: ${contacts[contacts.length-1].phone} / Email: ${contacts[contacts.length-1].email}`);

"use strict"; 

const prefixx = "username_"; 

let userName = "Jack"; 
// const userName = "Adam"; 

let prefixedUserName; 
// const prefixedUserName; 

userName = "John"; 
prefixedUserName = prefixx + userName; 
console.log(prefixedUserName, userName);
console.log(prefixedUserName /*+ prefixedUserName2 */); 
// console.log(prefixedUserName2);
// let msg = 20n + 10;

// MODULE 3
console.log(2*3+1); 
console.log(2**4);
console.log(5/1);
console.log(8**2-5**2);

console.log(4 * 5 == 20);
console.log(6*5 == "30");
console.log(-17 != 0);
console.log(25 > 1);
console.log(2+2*2 > 4);

console.log(true != false);  
console.log(false == false);
console.log(false || false || true);
console.log(true || false && false && true);
// ternary
let samp = 4 > 2 ? "Janeki" : "Bob";
console.log(samp);

window.alert("Hello");