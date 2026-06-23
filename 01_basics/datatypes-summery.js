// Here in JS datatypes are mainly devided in to two parts (1)Primitive ,(2)NonPrimitive/Reference type

//Primitive datatype: -> They are also devided in to 7 types :String, Number, Boolean, null, undefined,
//                        Symbol, BigInt.
//                        (premitive datatype is call by value it means when you copy
//                        them from one to uunother then it does not give the actual memory reference
//                        instead of copied version given all changes are accured in that copied version).

const Id = Symbol("123");
const anotherId = Symbol("123");

//console.log(Id === anotherId); // false :-> This is the speciality of symbol    



// Reference type (Non Primitive): -> call by reference (memory reference directly given)
//                                :-> types : Array, Objects, Functions

// :=> JS is dynamically typed language because we don't have to define the datatypes 

const heros = ["Shaktiman","Superman","Spiderman"]
let myObj ={
    name: "Vidya",
    age:20,
}

console.log(heros);

 const myFunction = function () {
    console.log("Hello World!");
        
 }
console.log(myFunction ());


console.log(typeof heros);  //=> Object
console.log(typeof myFunction);  //=> function (Object function)

