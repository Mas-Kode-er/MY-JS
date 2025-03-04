// declaring obejcts using constructors : singleton objects 

const tinder = new Object()
console.log(tinder); // here it will give empty object ---> {} : as the properties are not declared and initialized...

tinder.name="Varun Pandey"
tinder.age = 18
tinder.id = "123abnc"

console.log(tinder)
console.log("-----------------------------------------------------------------------------");
const regularuser ={
    fullname: {
        username:{                  // this is an exmaple of the nested objects 
            firstname: "varun",
            lastname:"pandey",
        }
    }
}
// to access these we use . operator  
console.log(regularuser.fullname); // object ke printing mein bhi nested object print hoga ..

console.log(regularuser.fullname.username.firstname); // nested way mein hi access karna padhta hai..

// combining objects like arrays
console.log("-----------------------------------------------------------------------------");
const obj1 = {
    1:"a", 2:"b"
}
const obj2 = { 3:"c",4:"d"}

const obj3 = {obj1,obj2} // can be done in this way , but it will also create nested objects that we dont want 
console.log(obj3);

// better approach : using assign(target,source1,source2,...) fxn..

const obj4 = Object.assign({},obj1,obj2) // 

console.log(obj4); // individual items ek hi obeject ke ander store huye hai as key, value pairs..

//best approach : using spread operator ...

const obj5 = {...obj1,...obj2}
console.log(obj5); // same kaam karta hai 

// Important methods for objects ..
// we can get all the keys of an object
// we can get all the values of an obejct
// we can also get the pairs of both of them
console.log("-----------------------------------------------------------------------------");

console.log(Object.keys(tinder)); // ----> returns an array of keys 
console.log(Object.values(tinder));//-----> returns an array of values
console.log(Object.entries(tinder));//----> returns an array of key , value pairs
console.log(Object.hasOwnProperty('isLoggedIn')); // returns boolean value of whether the key is presnt in the object or not ..






