// //console.log("hello-world");

// //variables
// var color = "blue"; //string data type
// console.log(color);

// var num = 10; // number data type
// console.log(num);

// var str1 = "EnglandAmericaCanada"
// var try1 = str1.length; //length keyword gives the number of characters
// console.log(try1 + 5);

// var str2 = "i love cheese pizza, its amazing"
// var try2 = str2.indexOf("pizza"); // indexOf keyword gives the index number of the charachter/word
// console.log(try2);

// //slice method
// var str3 = "car, bikr, bus, plan";
// var try3 = str3.slice(0,3);
// console.log(try3);

// //replace mrthod
// var str4 = "Please come early";
// var try4 = str4.replace("early", "soon")
// console.log(str4);
// console.log(try4);

// //precision method

// a = 20.2154648449
// b = a.toPrecision(4);
// c = a.toPrecision(3);
// console.log(b);
// console.log(c);

// //toString method
// x = 122;
// y = x.toString();
// console.log(y);
// console.log(y + 100);

// var num = 101.2255
// console.log(num.toPrecision(4));

//prompt: getting input from user
console.log("welcome to the store !");
console.log("we offer coffee for 2$ each and cookies for 1$ each ");
var q1 = prompt("how many cup of coffes would you like to have ? ",);
var q2 = prompt("how many cookies would you like ? ",);
var q3 = prompt("how much tip would you like to leave ? ",);

q1 = parseInt(q1);
q2 = parseInt(q2);
q3 = parseInt(q3);

var c1 = q1 * 2;
var c2 = q2 * 1;
var taxes = (q1 + q2) * 0.1;
var total = c1 + c2 + q3 + taxes;
 console .log("you have ordered " + q1 + " cofees for the total of " + c1 + "$");
 console .log("you have ordered " + q2 + " cookies for the total of " + c2 + "$");
 console.log(taxes + "$ for taxes")
 console .log("you have left " + q3 + "$ for your tip ")
 console.log( " the total of your bill is " + total + "$ with taxes");
