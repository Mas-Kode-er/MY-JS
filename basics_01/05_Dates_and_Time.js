// +++++++++++++++++++++++++++++++++++++++++++++++++++++  Dates +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const date = new Date(); // date ek object create kia hai humne class Date{} ka
console.log(date.toString()); // shows date in Day Month Date year
console.log(date.toDateString()); // Day Month Date Year
console.log(date.toISOString());
console.log(date.toLocaleDateString()); // Month/Date/Year

console.log(typeof date); // Checkinh that we made date as an obeject

// Initializing a date via object creation

const newdate = new Date(2024, 2, 30); // allows us to input value of a date (this input is taken in an array) : Year comes first . then the month and the then date . In this the value of month corressponding to jan --> 0 , Feb-->1 , Mar--> 2 and som on.....
console.log(newdate);
// to create it into a more readable format...
console.log(newdate.toDateString()); // will convert it into {day MM/DD/YY}

// Creating and initializing objec tin another form..

let ndate = new Date("01-14-2024"); // date is given as an input string in the format mm/dd/yy
console.log(ndate.toLocaleString()); // toLocaleString() does not show the day of the date..

// Getting date in milliseconds: --> Useful when we need to make timestamps in applications like booking websites for checkin and checkout..

let timestamp = Date.now(); // returns the number of milliseconds that have passed since 1 jan, 1970 : Standard time for js..
console.log(timestamp);

// Ab agr hume iss timestamp ko kisi value se compare karna hai lets say ki hume ye check karna hai ki konsa timestamp phle aaya and konsa baad mein
// We find the value of our given date in ms
console.log(ndate.getTime()); // returns the number of ms that have passes till the input date from standard js time
// if you want to get the time in seconds divide the time by 1000 and then take the floor of the value to get the value in seconds..

console.log(ndate.getDate()); // used to get the date in number only 
console.log("The day in ndate is :"); console.log(ndate.toDateString());


console.log(ndate.getDay() +1); // used to get the day in number only ; 0--> Sun; 1 --> Mon; 2 --. Tues and so on , 0 se start isliye hota hai cause array format mein hai 
console.log(ndate.getMonth()+1); // to make it user friendly : we add +1 : 0--> jan , 1 --> Feb and so on .. 

// Now these seperated values can be used to represent the date in the format we want like dd/mm/yy or nay other by using  String Interpolation.. i.e ` ` and ${variable}
`The date is ${ndate.getDate()} and the month is ${ndate.getMonth()} and the year followed by day is $${ndate.getDay()}`

