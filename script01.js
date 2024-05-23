// Document Object Model
document.querySelector("h1").innerHTMl="Goodbye"

const { name } = require("ejs");
// Simple javascript.
var age=20;
console.log(age);

var name="Angela";
name.length;
console.log(name);

//You have written 182 characters you have -42 characters left.
var tweet =prompt("compose your tweet:");
var tweetCount = tweet.length;
alert("you have written " + tweetCount + " characters you have left " + (140-tweetCount));

//slicing and dicing where A is at position 0. The result will be Ang.
//Programmers always count from 0.  
var name ="Angela";
name.slice(0,3);

//How to ensure the prompt has a maximum number of characters. 
var tweet = prompt("compose your tweet");
var tweetunder140 = tweet.slice(0,140);
alert(tweetunder140);

//same code will work the same as above 
alert(prompt("compose your tweet:").slice(0,140));

//Capitalise first letter of the name
var name = prompt("What is your name");
var firstChar =name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restofname = name.slice(1,name.length);
var capitalisedName = upperCaseFirstChar + restofname;
alert("hello " + capitalisedName);

