console.log(2>1); //=> true
console.log(2>=1); //=> true
console.log(2==1); //=> false 
console.log(2<1); //=> false 
console.log(2!=1); //=> true



console.log("02" > 1); // =>true
console.log("2" == 1); // =>false

console.log(null > 0);  //  =>false --> "reason behind it simple that comparison(<,>,>=,<=) & 
console.log(null == 0); // =>false       equality work diffrently; comparison converts null to a 
console.log(null >= 0); // =>true        number ,treating it as 0 that's why (3) null >= 0 is false"
console.log(null < 0); // =>false


console.log(undefined > 0);  //=> false 
console.log(undefined >= 0);  //=> false 
console.log(undefined == 0); //=> false 
console.log(undefined < 0); //=> false 

//NOTE:-> these kinds(undefined, null) can make trouble in code life so better to avoid them 



//  "===" :--> ('strict check')

console.log("2" === 2);  //=> false 

