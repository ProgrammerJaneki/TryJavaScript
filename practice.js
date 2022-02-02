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
// ternary
let samp = 4 > 2 ? "Janeki" : "Bob";
console.log(samp);
// Ternary =  condition ? expressionIfTrue : experssionIfFalse


// 5.1.1.3 FUNCTIONS
console.log("==========================");

function getMeanTemp(temperatures) {
    let sum = 0;
    for (let i=0; i<temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
};
let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`Mean: ${getMeanTemp(day1)}`);

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp(day2)}`);

function add(first, second) {
    return first + second;
}
console.log(add(2,4));

// Sample Parameters Validation
function getRealMT(temp) {
    if (!(temp instanceof Array)) {
        return NaN;
    }
    let sum = 0;
    for (let i=0; i<temp.length; i++) {
        sum += temp[i];
    }
    return sum/temp.length;
}
console.log(getRealMT(10));
console.log(getRealMT([14,17,20,13]));

function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;  // result = result * n
        n--;
        // console.log(n);
    }
    return result;  
}
console.log(factorial(6)); // -> 6 * 5 * 4 * 3 * 2 * 1 = 720
// Example of Recursion
let cnt = 1;
function secFacttorial (n) {
    return n > 1 ? n * secFacttorial(n - 1) : 1; // It only return anything on the last recursion
}
console.log(`Result: ${secFacttorial(6)}`);
function countDownRecursion(n) {
    console.log(n);
    return n > 1 ? countDownRecursion(n-1) : console.log("hooray");
}
countDownRecursion(5);

function showMessage(message) {
    console.log(`Message: ${message}`);
}
let sm = showMessage("Hello");

// Asynchronous Callbacks - The order of the declaration doesn't matter
let inner = function() {
console.log('Show this ');
}
// This is a important example of Asyncronous Callback
let outer = function(myCallBack) {
    console.log('outer 1');
    console.log('outer 2');

    /* Call back is a function passed as an argument to a function  */
    let timerId = setInterval(myCallBack, 1000) /*ms*/;
    setTimeout(function(){
        clearInterval(timerId);
    }, 3500);
}
console.log('test 1');
// outer(inner);
console.log('test 2');

let secAdd = (a, b) => a + b; // It will return the sum of a and b
console.log(secAdd(10, 20));

let listNames = ["Alice", "James", "Carl"]; function showNames(element) {
    console.log(element);
}
listNames.forEach(showNames); // forEach function will be called each time for the element of the array
showNames(listNames);

// Example of Arrow Function
let numbers = [50, 10, 40, 30, 20];
let sorted =  numbers.sort((a, b) => a-b);
let thisSort = (a,b) => a-b;
console.log(numbers.sort());
/*
function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if(a > b) {
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
*/
console.log(sorted.reverse());
let thisSample = x => x == 2 ? "Correct" : "Wrong";
console.log(thisSample(1));
// Functions that will check whether the number is integer or not
let thisAdd = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a+b;
let thisSub = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a-b;
let thisMult = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a*b;
console.log(thisAdd(2.5, 2.5));
console.log(thisSub(15, 5));
console.log(thisMult(2, 4));

let action = (thisCallBack, a, b) => thisCallBack(a,b);
console.log(action(thisAdd, 12, 10.1));
console.log(action(thisMult, 5, 10));

// Sample Timer
/*
let timerCount = 1;
let setTimerId = setInterval(function() {
    console.log(timerCount++);
}, 1000);
setTimeout(function(){
    clearInterval(setTimerId);
}, 5000);
*/
let fibbRec = function(n) {
    let returnVal = 0;
    if (n != 0) {
        if (n == 1) {
            returnVal = 1;
        } else {
            returnVal = fibbRec(n- 1) + fibbRec(n - 2);
        }
    }
    return returnVal;
}
console.log(fibbRec(4));
// Shorter Version using Arrow Function
let shortFibb = m => m == 0 ? 0 : (m==1 ? 1 : shortFibb(m-1) + shortFibb(m-2));
console.log(shortFibb(6));

// 5.2.1.14 LAB: FUNCTIONS 
// showContact, showAllContacts, addNewContact
let showContact = function (listContacts, index) {
    // Will check if the argument passed is an Array
    if (listContacts instanceof Array && contacts[index]) {
        console.log(`Name: ${contacts[index].name} / Phone: ${contacts[index].phone} / Email: ${contacts[index].email}`);
    }    
}
let showAllContact = function (listAllContacts, index) {
    // Will check if the argument passed is an Array
    if (listAllContacts instanceof Array) {
        console.log("List of Contacts: ");
        for (let i=0; i<contacts.length; i++) {
            console.log(`Name: ${contacts[i].name} / Phone: ${contacts[i].phone} / Email: ${contacts[i].email}`);
        }
    }
}
let addNewContact = function (contacts, addName, addPhone, addEmail) {
    if (contacts instanceof Array) {
        // We will add new contacts on the last index
        contacts.push(
            {
                name: addName,
                phone: addPhone,
                email: addEmail
            }
        );
    }
}
showContact(contacts, 3);
addNewContact(contacts,"Janeki","0909","Janeki@gmail.com");
showAllContact(contacts);

// Module 6 

