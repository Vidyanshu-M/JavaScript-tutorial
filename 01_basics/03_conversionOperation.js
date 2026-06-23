/*

let score1 = 33
let score2 ="Vidya"
let score3 =null
let score4 =undefined
let score5 ="123abc"
let score6 = true


console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);
console.log(typeof score5);
console.log(typeof score6);

console.table([score1,score2,score3,score4,score5,score6])

let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
let valueInNumber5 = Number(score5)
let valueInNumber6 = Number(score6)


console.log(typeof valueInNumber1)
console.log(typeof valueInNumber2)
console.log(typeof valueInNumber3)
console.log(typeof valueInNumber4)
console.log(typeof valueInNumber5)
console.log(typeof valueInNumber6)


console.table([valueInNumber1,valueInNumber2,valueInNumber3,valueInNumber4,valueInNumber5,valueInNumber6]);



//"33" => 33 (number)
//"123abc" => NaN (not a number ,but it's type is number )
//true => 1; false => 0

*/




let isLogedIn ="Vidyanshu"
let booleanIsLoggedIn =Boolean(isLogedIn)
// console.log(booleanIsLoggedIn);


// 1 => true; 0=> false;
//" " => false; 
//"StringValue" => true 

let someNumber = 55
let stringNumber = String(someNumber)
// console.log(someNumber);
// console.log(typeof stringNumber);


//*********************** OPERATIONS ************************//
 

let value1 = "3"
let negValue1 = -value1
 console.log(negValue1);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "Hello"
let str2 = "Vidyanshu"
let str3 = str1 + " " + str2
 console.log(str3);
 console.log("1" + 2);
 console.log(1 + "2");
 console.log("1" + "2");
 console.log("1" + 2 + 2 );  //if first value is string then it will convert all other values to string and then concatenate them
 console.log(1 + 2 + "2"); //if first value is number then it will perform addition operation and then convert the result to string and concatenate with "2"
 console.log( 1 + 2 + "3");

 console.log((3+4)*2);

 console.log(+true);  //1
 console.log(+false); //0
 console.log(+""); //0
 console.log(+"Vidyanshu"); //NaN
 console.log(+null); //0
 console.log(+undefined); //NaN
 console.log(+NaN); //NaN
 console.log(+Infinity); //Infinity

/*
 let num1, num2, num3, 
num1=num2=num3=2+2
console.log(num1);
 
let gameCounter = 100
gameCounter++ // gameCounter = gameCounter + 1
gameCounter++ // gameCounter = 1 + gameCounter
console.log(gameCounter);

//study documentation
//ECMA web page (search for typecasting in js) 
*/