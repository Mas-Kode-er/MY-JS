let score = 33
console.log(typeof(score));

let name = "varun"
console.log(typeof(name));

// datatype conversion in js is done using func of diff data types like Number(),String(),Boolean() etc, basically datatype ka name as a func likho and usmein variable ko pass kar do jisko convert krna hai..

console.log("Example to show Conv....");
let s = "22" // this number is considered as a string..
console.log(s);
console.log(typeof(s));



// conversion...
 let valueInNumber = Number(s) // this will covert s into a Number datatype
 // to check 
 console.log(typeof(valueInNumber));
 console.log(valueInNumber);

 console.log("Sometimes the given string can contain letters and not pure numbers , So on converting them , wo convert to ho jaenge , and typeof karne par desired datatype to de denge but value NaN(not a number denge) \n ");

 // example

 let str = "33abc"

 let num = Number(str)

 console.log(typeof(str));
 console.log(num);

//  "33"--> 33
//  "33abce" --> NaN
//  true --> 1; false --> 0
// Empty string "" ---> bool ---> false ; value string "abc"--> true
 

/// *** important note **** : null ka datatype object hota hai.. due to class 
 
 

