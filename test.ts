/*
// Step 01: types

var a: number = 1;
console.log(a);
a = 12;         //strong typing means types ko strongly follow krna hai

var b = 'anna';
b = '3'; 
c = 78.0;       //type inference told b is string so error when u try to assign it a number

// Step 02: const & let keywords

const pi = 3.142;   // const are fixed values, not reassignable
const c : boolean = true;

if(a < 15) {
    let d = 10; // let has a blocked scope, out of the if-block d has no existence
}
else {
    let d = 5;
}

for(var i = 0; i < 5; i++) {
    let e: number = i;
    console.log(e);
}
for(var j = 0; j < 3; j++) {
    let e: string ="hello" + j;
    console.log(e);
}

// Step 03: Duck Typing

let mytype = {name : "ann", id : 3};
mytype = {id : 1, name : "simmi"};          // properties can be reordered
// mytype = {id : 1, namely : "simmi"};     // error: property name and type should be same
// mytype = {name : "abc", id : 1, employed: true};    // error: additional property

//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

let t : {x : number, [t:string] : any}; //declaration
// property1 type is number and comma k bad wali chiz ko kehte hn index signature
// mtlb pehli property x hai number type ki or uske bad 't' number of properties exist kr skti hn yani jitni b
// '[t: string] : any' is index signature means is property ka koi b name hoga string type ka or iski value ki type any hogi

t = {x : 7, za : "120", z : true, a : null};    // assignment: name hai string and value hai any type ki

let mytype2 = {id : 2, name: "amer", status: true};  // additional property 'status' thats not in stale object 'mytype' (stale bole to purana)
mytype = mytype2;   // minimum properties requirement fulfilled so no masla
//mytype2 = mytype;   // min. req. not satisfied so error

// console.log(mytype.status); // compile time error 
//qk status mytype me exist ni krta but it will run and print 'true'[its valid JS but invalid TS]
console.log(mytype.id); // 2 qk it displays mytype2 ki id now

let mt = {id: 1, name: "abc"};
mytype=mt;  // same hn to ok 

let abc: {id: number, name? : string};  //declaration uses ':' and assignment uses '='
abc = {id : 1}; //qk name is an optional parameter indicated by ? sign

// Step 04 : Arrays

var arr : number[] = [1,4,90,78];   // syntax 1
let array : Array <string> = ['a','b','c','d','e'];  // syntax 2
var arrr : boolean[] = [];  // syntax for empty array declaration

arrr.push(true);    // dynamically add elements to the array
arrr.push(false);
arr.push(1);

console.log(array[1]);  // access array elements as usual using its index
console.log(array);     // displays the entire array when index is not specified

// Step 05: Any type

let mType : any = { name: "Zia", id: 1 };
mType = { id: 2,  name: "Tom" };// can only assign a type which has the at least the same properties
mType = { id: 3,  name: "Mike", gender: false };//becuase of any it assigns a different type
mType = { name: "Mike", gender: false };//can even reduce the properties because of any type
mType = {age : 28};             //koi b purani property na ho 1 new prop ho to b chalega
mType = {age: true, id: "abcdef", name: 8}; //new old properties mix hon tb b fine

mType = "Even a sring can be assigned";

mType = function(){ console.log("Even a function can be assigned to any")};

let notSure: any = 4;   // type any means value can be string or number or boolean or anyother
notSure = "maybe a string instead";
notSure = false;
notSure = null;
notSure = undefined;

// Step 06 : Explicit Casting

var casting = <any> {name: "anny", course: "typescript"};   // syntax <> on right hand side
var casti = {name: "sadaf", id: 5} as any;                  // alternate syntax :- as 'type' in end 

casting = {name: "ann"};    // only 1 parameter p b chal gya
casting = {id: 6};  // koi b parameter ni dia ik naya dedia chal gya
casting = {course: "bootstrap", class: 7};  // ik naya ik purana chal gya
casting = {name : 7, course: true}; //values type change ki phir b chal gya due to explicit casting

var age = <any> 25; 
console.log(typeof(age)); //number

//type to 'age' ki number hi hai but koi or type assign krenge to masla ni hoga qk explicitly cast krwadia hai "any" me

var a = 6 as any;
console.log(typeof(a)); //number
a = "string";
console.log(typeof(a)); //string

var bi = true;
age = bi;
age = "hello";  //typeof(age) == string
age = {};
age = [];
age = null;

let abcd = 5 as number;
//abcd = [1,5,9]; // error: type number is not assignable to array

// Step 07: Enumeration "enum"

enum signal {red, green, yellow}; // syntax to declare an enum
let color : signal = signal["green"];   //syntax to use the index of a member of enum with [" "]
let colo : string = signal[0];  // syntax to use the value of member of enum
let col : number = signal.yellow; // alternate syntax to use the index of a member of enum with a dot
console.log(color + colo + col);    // 1red2 (+ is used for concatenation in console.log())

enum sig {pink, purple = 5, blue}; // can assign custom index to each or anyone of the members
// the next i.e. blue will auto be assigned the index of 6 by ++ the specified index for purple i.e.5

console.log(sig.blue);  // 6
console.log(sig[0] + sig[1]); // sig[0] = pink and sig[1] = undefined qk purple ko index=5 dia hai

enum door {open, close, ajar};
console.log(door.open.toString()); //0 .toString() ka method isko string me convert krha hai from 0 to '0'.
console.log(door.open); //0
console.log(door["open"].toString()); //0
console.log(door[0].toString()); //open

// Step 08: Const Enumeration

const enum signal {red, green, yellow}; 
//console.log(signal[0]); // error: a const enum member can only be accessed using a string literal
console.log(signal["red"]); //0
console.log(signal["red"] + signal.green);  // 1 [qk it adds 0 n 1 making the output 1, qk numbers p + apply kro add hoga concat ni]

// Step 09: Function

function addition(num1: number, num2: number): number { //named function
    return num1 + num2;
}
var sum : number = addition(2,4);
console.log(sum);   //6
console.log(addition(1,2)); //3

var diff = function (num1: number, num2: number) : number { //anonymous function
    return num1+num2;
};
console.log(diff(3,2)); //5 qk function has no name so we use the var to call the anonymous function

let prod : (num1: number, num2: number) => number = function (x: number, y: number): number { //Anonymous function with explict type
    return x*y;
};
console.log(prod(2,5)); //10

let quotient = (num1: number, num2: number) => num1/num2; // lambda functions
// same as: let quotient = function(x:number, y:number):number { return x/y; };
console.log(quotient(15,3));    //5

// in every function there exists an array comprising of all the supplied parameters called "arguments".
function testParams(...x) { //rest parameter x ki type define ni ki yahan bus 
    if(arguments.length > 0) { // means agr arguments pass hue hn to
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);  // called the arguments array
            console.log(x[i]);  // used the rest parameter here 'x'
        }
    }
}
testParams(2,3,4,5,6,7,8);
testParams("abc");

// Step 10: Functions with optional parameters

function addition(num1:number, num2?:number):number {
    return num1+num2;
}
addition(3,2);
addition(3);    // qk 1 parameter is optional
//addition(); // error: supplied parameters dont match any signature of call target.

function a (x?:number, y:number): void {}  // error: a required parameter cannot follow optional
// i.e. optional parameter always comes last (in the end of the parameters list)

var add: (x: number, y?: number) => number = function (x: number, y?: number): number {
    return x+y;
};
add(3);
add(3,2);

// Step 11: Function with default parameter

function nam(fnam: string, lnam = "Khan"): string { // parameter 'lnam' is default parameter here
    if(lnam) { if lname is true, i.e. lname exists
        return fnam + " " + lnam;
    }
    else {
        return fnam;
    }
}   // default parameter bhi like optional parameter end of the list p ata hai

console.log(nam("anna")); // jb 2nd parameter ni dia to default value use hui: anna khan
console.log(nam("anthony","gonzalwis")); // 2nd parameter dia to default value ignored: anthony gonzalwis

//var naam : (fnam: string, lnam="john") => string = function (x:string, y? = "Sheikh") {}
// error1: "john" p aya: parameter ko initialize sirf function ya constructor me hi krskte hn
// error2: y? = "Sheikh": parameter cannot have ? and initializer mtlb dono 7 ni hoskte mtlb type jahan btarhe hn wahan btau k optional hai or function me uski default value do
// btw default parameters are optional

var naam : (fnam: string, lnam? : string) => string = function (x:string, y = "Sheikh") { //jahan type define hori hai wahan btadia k optional parameter hai or function me initialize krdia default value se 
    return x + " " + y;
}
console.log(naam("huma"));
console.log(naam("faiza","kanwal"));

// Step 12: function with rest parameter

// when we have to use a variable number of function parameters, i.e. how many parameters would be passed is not fixed at the time of function definition, then we use rest parameters. 
// its an array of parameters to be passed and comes at the end of parameter list like optional and default parameter
// a rest parameter cannot be optional mtlb cant have ? lekin agr koi parameter pass na b kro to its ok
// a rest parameter has type: array
// a rest parameter cannot have an initializer, mtlb isey default b ni bana skte

function add(num1: number, num2: number, ...num: number[]): number { // syntax of rest parameter is ... before the parameter name
    var sum : number = num1 + num2;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return(sum);
} 
console.log(add(2,4,8,1,7,6,5,4,3)); //40
console.log(add(7,8)); //15, its ok with 2 parameters but single parameter will be error

var sum : (num1: number, num2: number, ...num : number[]) => number = function(x: number, y: number, ...z: number[]) :number {
    let add = x+y;
    for(let i = 0; i < z.length ; i++) {
        add += z[i];
    }
return add;
}
console.log(sum(1,2,3,4,4,5,5,5)); //29
console.log(sum(1,2)); //3

// Step 13: Lambda Functions (single-line functions)

// lambda func m this ka keyword exist nhi krta. if we use "this" then parent func ka this milega aur agr parent func na ho to this me window object milega

//console.log(add("anna","mary"));    
// error: add is not a function, define krne se pehle call ni krskte anonymous function ko
// anonymous function wo jo function k keyword se declare ni kie hon like this one

var add = (x: string, y: string): string => x+y; //lambda function: its denoted by => 
console.log(add("2","4"));
console.log(add("Anna","Mary"));    

var myFunction = f => { this.x = "x"; } // automatically creating the that-equals-this pattern
// myFunction is a function with 'f' as its only parameter then 'fat-arrow' the sign of lambda function
// "this.x ='x';" this ka keyword btaraha hai is scope me means function definition me x ki value "x" hai

//When compiled, TypeScript automatically makes sure this points to my class instead of the enclosed function: output js shown below
//var _this = this;
//var myFunction = function (f) { _this.x = "x"; };

// Step 14: Function Callbacks

function f(text: string) { //simple function
    console.log(text);
}

function callingfunc(text: string, callback: (x: string) => void) { // callback function:func that takes another func as a parameter 
    callback(text);    
}
// function ka keyword then uska nam phir (parameter name: type) yahan 2 hn 2nd is a function named callback that takes a string argument and => void means it returns nothing

callingfunc("Hello World", f); // callback function ko call kia hai 

// Step 15: Function Overloads: multiple function signatures for the same function

// Explanation: we declare same function with different parameter types as a prototype b4 func definition
// 1.none of the function signatures on the first three lines actually have a function body. 
// 2.the final function definition uses the type specifier of 'any' and eventually includes the function body. 
// 3.v r limiting the function by using these function overload signatures, to only accept two parameters that are of the same type.
// 4. overloads must be ordered from specific to general like pehla overload lets say 'string' ho or last me 'any' :thats general

function add (x: string, y: string): string; // overload
function add (x: number, y: number): number; // overload
function add (x: boolean, y: boolean): boolean; //overload
function add (x: any, y: any): any { // function definition that has 3 overloads
    return x + y;
}
console.log("Numbers passed", add(1,2));
console.log("Strings passed", add("Anna","Mary"));
console.log("Booleans passed", add(true, true));
//console.log("Mixed passed", add(3,"a"));    //error: qk kc b function signature se match ni hora

// Step 16a: Union Types : denoted by | the pipe sign

var x : number|string = 6;
var x : number|string = "8";
//var x : number|string = true;   // error: boolean isn't assignable to number|string

function add(x: number|string): number|string {
    if (typeof x === "string") { //This is known as "type guard", i.e. type of x will be treated as a string within the if-block
        return x + "is a string";
    }
    if (typeof x === "number") {   // x is treated as a number here
        return x + 10;
    }
}
console.log(add(9));
console.log(add("9"));

function age(x: number|number[]) {
    var sum : number = 0;
    if(typeof x === "object") { // if we chk typeof x here, it'll say "object" thats why instead of 'array' i've used 'object'
        for(var i = 0; i < x.length; i++) {
            sum += x[i];
        }
    }
    else if(typeof x === "number") {
        sum = x+5;
    }
    return sum;
}
console.log(age(6));
console.log(age([5,8,9,0,7,5,3]));
console.log(age(null)); // its treating "null" as an object.no compiler error but runtime error ara qk length detect ni hori null ki

// Step 16b: Custom Type Guards
//Guard funcs r denoted by their “a is X” return type,which returns boolean and signals to compiler what the expected type now is

interface Animal {name: string; }
interface Cat extends Animal { meow(); }

function isCat(a: Animal): a is Cat {
  return true;
}

var x: Animal;

if(isCat(x)) {
  x.meow(); // OK, x is Cat in this block
}

// Step 17: Type Aliases :  they are simply alternative names for types. You can use type aliases anywhere you can use a type

type strnum = string|number; // type keyword tells its a type alias
type array = string[]|number[]; // all elements must be either of number type or string type, cant be mixed 
type arr = Array<string|number|boolean>;

var num : strnum = 78;
num = "anny";
var nam: strnum = "abc";
nam = 8;

type f = () => void;  // function that takes no parameter and returns nothing
type funct = (text: string) => void;

g("hey"); // function call
f(); // function call
//a(); // error: definition se pehle call ni krskte anonymous function ko

var a: f = function(): void { // f used instead of () => void
    console.log("using f as a type alias");
};
a();

function f() {
    console.log("A function with no parameter");
} 

function g(funct) {
    console.log("A function with a string parameter : " + funct);        
}

// Step 18: Tuples: Tuple types have the advantage to accurately describe the type of an array of mixed types

var arr : [boolean, number]; // when we define a mixed array to uski type is tuple
//index0 must be boolean, index1 must be number, then kuch b ho but boolean ya number me se hi hoga

arr = [true, 7];
arr = [false, 678, 0987, true, 90, 908, true, false, 76765, 0.789]; 

var array : [string, number] = ["a",0,0,9,9,0,"b","c"];
//array = [0,"a"]; //error: [num,str] is not assignable to [str,num]

//trying an example from book chp 2 and its the toString experiment

var a: number = 1;
var b: string = a.toString(); // its possible to apply .toString() method on a number type var so it converts 1 to '1'

console.log(a+b); // it returns the number value 
console.log(typeof a.toString()); // and its type is now string, but typeof a = number and a.toString() is of type string
*/

