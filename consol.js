//console.log("hello-world");

//variables
var color = "blue"; //string data type
console.log(color);

var num = 10; // number data type
console.log(num);

var str1 = "EnglandAmericaCanada"
var try1 = str1.length; //length keyword gives the number of characters
console.log(try1 + 5);

var str2 = "i love cheese pizza, its amazing"
var try2 = str2.indexOf("pizza"); // indexOf keyword gives the index number of the charachter/word
console.log(try2);

//slice method
var str3 = "car, bikr, bus, plan";
var try3 = str3.slice(0,3);
console.log(try3);

//replace mrthod
var str4 = "Please come early";
var try4 = str4.replace("early", "soon")
console.log(str4);
console.log(try4);

//precision method

a = 20.2154648449
b = a.toPrecision(4);
c = a.toPrecision(3);
console.log(b);
console.log(c);

//toString method
x = 122;
y = x.toString();
console.log(y);
console.log(y + 100);