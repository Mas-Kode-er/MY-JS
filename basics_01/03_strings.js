// concatenation of string
let str1 = "hello"
let str2 = " varun"

let str3 = str1 + str2 // concatinating strings using '+'

console.log(str3);

// correct way to concatinate strings using backticks ` ` here the value inside the strings is accessed using ${variable}

let s1 = "Varun"
let s2 = "Pandey"

console.log(`Hello my first name is ${s1} and last name is ${s2}`)

// modern way or new way to initialize strings..
const gameName= new String("Welcome Player")
const New = new String("Varun Pandey") // it is somewhat similar to array and the char are stored i) key,value)
// here the string is created as an object of the class String
// We are able to use various func and methods of the class to perform various operations on the strings...

// Examples: --> .length, .toUpperCase(), .toLowerCase() etc.. Below is a list of some of them

console.log(New[0]); // access the first character of the string with its index.

// console.log(gameName.__proto__);


 console.log(gameName.length); // gives the length of the given string
 console.log(gameName.toUpperCase()); // coverts each char of the string to uppercase char..

console.log(gameName.charAt(2)); // .charAt()--> takes index as an input and returns the char at that index or key

console.log(gameName.indexOf('P')) // .indexOf()--> takes char as an input and returns index where that char is present..

// Creating Substrings from given strings...

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// .trim()--> used to neglect whitespaces in a string and newline char \n also 

const name = "    vapa  "

console.log(name) // will print the spaces also 

console.log(name.trim())

const url = "https://youtube.com%20varun.com"

// .replace() func is used to find a char in a string and replace it with or desired string..
// Example..

console.log(url.replace('%20','-')) // %20 is replaced with -

// we can also check for whether a string contains specified charac or not using .include('string')

console.log(url.includes('com')) // output should be true..

// ** important ** --> if we want to get an array of strings from a string which is formed from a particular char , we use split()func .
// here we give char from where we want to divide the string as input and we get array of strings divided between that char as output..

console.log(url.split('.')) // array mil jaegi 










