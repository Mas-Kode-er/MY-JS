// .........DESTRUCTURING OF OBJECTS....................
// ek object milega usko destructure karke uski valued deni hogi

const course = {
    name: "History",
    price: 999,
    courseInstructor:"VArun"
}
// to access values
console.log(course.courseInstructor);
console.log("-----------------------------------------------------------------------------");

// for easy accessing we can use a better syntax , which will allow us to access the keys directly

const {courseInstructor:inst} = course // <---- const {key to be accessed : shorter name if we want} = Obejct_name

 // iske baad hum directly inst se courseInstructor ko access kar skte hai..

 console.log(inst);

 //........................ APIs ..........................

// somewhat similar to the objects : but here keys are also denoted like strings inside " "

// {
//     "name":"varun",
//     "class":"it",    <--- iss type ka data aata hai 
//     "price": 2499      <-- isko hum obejct mein convert karte hai and then individual data ko access kar skte hai 
// }
 
// Sometimes API can also be given as a collection of obeject inside an array
[
    {},
    {},
    {}
]

// JSON : javascript object notation 