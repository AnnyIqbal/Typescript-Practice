g("hey"); // function call
f(); // function call
//a();
var a = function () {
    console.log("using f as a type alias");
};
a();
function f() {
    console.log("A function with no parameter");
}
function g(funct) {
    console.log("A function with a string parameter : " + funct);
}
/*
// Step 18: Tuples: Tuple types have the advantage to accurately describe the type of an array of mixed types

var arr : [boolean, number]; // when we define a mixed array to uski type is tuple
//index0 must be boolean, index1 must be number, then kuch b ho but boolean ya number me se hi hoga

arr = [true, 7];
arr = [false, 678, 0987, true, 90, 908, true, false, 76765, 0.789];

var array : [string, number] = ["a",0,0,9,9,0,"b","c"];
//array = [0,"a"]; //error: [num,str] is not assignable to [str,num]

//trying an example from book chp 2

var a: number = 1;
var b: string = a.toString(); // its possible to apply .toString() method on a number type var

console.log(a+b); // it returns the number value
console.log(typeof a.toString()); // and its type is now string, but typeof a = number
*/
