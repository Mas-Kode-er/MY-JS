const User = {
    name : "varun",
    email: "hellobacchom@pw,com",    // ye objects ke properties key , value pair mei store hote hai..
    mob : 7456998900,                // yaha par key as a string store hota hai and value can be of any data type...
}
User.name="ashsish"
console.log(User["name"]);

// Important question for interview purpose ..
// HOW TO STORE A VALUE FOR A KEY THAT IS A SYMBOL .

const sim = Symbol("hello")
const something = {
    sim : "this is a message for",
    name : "Varun Pandey",
    isloggedin : false,
}
Object.freeze(something)   // this is a way to fix the value of an objects i.e when we do not want to change them....

console.log(typeof something["sim"]); // hello yaha par bhi string mein ho rahi hai .. 
 // to store it as a symbol..

 const hello = Symbol("bete mauj kardi");

const some = {
  [hello]: "this is a message for", // symbol used as key
  name: "Varun Pandey",
};

// Accessing the value associated with the symbol key
console.log(some[hello]); // Outputs: "this is a message for"

// To get the symbol itself
console.log(hello); // Outputs: Symbol(bete mauj kardi)
console.log(typeof hello); // Outputs: symbol

