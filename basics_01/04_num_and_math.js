
//++++++++++++++++++++++++++++++++++++++++++++++  NUMBERS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const num = 400
console.log(num) // here the js automatically understands that num varibale is a number 

// But we can also explicitly define a number by making it an object..

const bal = new Number(100)
console.log(bal); // the outputs shows that the object that we are printing is a number, if we do the same in the console of the browser, we also get the properties of the objects... properties refer to the functions that we get that helps us to perform various operations..

console.log(bal.toFixed(2));// same like setprecision in c++ , tells us the precision of the decimal value (kahan tak dec point ki value chahiye)

const p = 123.9989
console.log(p.toPrecision(3)); // toPrecision helps to give the value of a number in a specifies number of digits , it gives that value in normal or exponential form, bit tricky so read MDN ref before using..(total value mein kitne digits chahiye)
console.log(p.toPrecision(4));
console.log(p.toPrecision(2));

// noting values of numbers like number system , thousand , humdreds , ones..etc
const th = 100000
console.log(th.toLocaleString()); // gives , acc to american or european standards 
console.log(th.toLocaleString('en-IN')); // INDIAN NOTATION



// conversion of Number to string : WHY? because we get so many more func/properties on strings..

const newbal = bal.toString() // number stored in bal is coverted to a string here
console.log(newbal); // printing the number as a string
console.log(newbal.length); // finding out the length of string that gives the number of digits in the number.

//++++++++++++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); // object of math class . It also comes with a lot of usefull properties..

console.log(Math.abs(-5)); // This gives the absolute value of a number.. modulus
console.log(Math.round(4.6)); // round off properly
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));

console.log(Math.sqrt(4)); // square root 
console.log(Math.pow(4, 3)); // exponential power

// to find the max and min numbers in an array we have .min and .max functions 

console.log(Math.min(3, 5, -1, 0));
console.log(Math.max(3, 5, -1, 0));

// +++++++++++++++++++++++++ MOST IMPORTANT  ++++++++++++++++++++

console.log(Math.random()); // Math.random() gives random value b/w 0 and 1 ; helps us t design various applications where we need random output(s) within a specified range..

console.log((Math.random() * 10) + 1);// If we want values in a single digit from 1 to 10 , we multiply by 10 and then add 1 beacuse : 0 bbi to aa skta hai na :) but iske answer bhi decimal ke baad bhi digits rahenge 

console.log(Math.floor(Math.random() * 10) + 1); // this will give solid whole numbers bw 1 to 10

// If we want random numbers between a Specified range lets say ; 10 and 20 : Learn this logic ;

const min = 10 // Lower limit
const max = 20 // upper limit 

console.log(Math.floor(Math.random()*(max-min+1)) + min );











