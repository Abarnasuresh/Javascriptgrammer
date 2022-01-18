# Javascript Evaluation 2
## 1.Display prime numbers 1 to 200?
### Algorithm
* Start the program
* Create a function primenumber
* Declare a variable flag=false
* Create an outer for loop and iterate until i=200
* Create an inner for loop(j=1; j<i; j++)
* Check whether i is divisible by j
   if yes declare flag=false
   if no declare flag=true and print the number
* Stop the program
### Psudocode
```javascript
BEGIN
FUNCTION primeNumber
INIT flag
FOR(i = from; i <= to; i++)
FOR(j = 2; j < i; j++) 
IF(i % j == 0) 
flag = false;
break;
ELSE
flag = true;
IF(flag) 
PRINT i
END
```
### code
```javascript
primeNumber(1, 200) 
function primeNumber(from, to){ 
    	var flag=false; 
    	for(i = from; i <= to; i++) 
         { 
             for( j = 2; j < i; j++) 
             { 
                 if(i % j == 0) 
                 { 
                     flag = false; 
                     break; 
                 } 
                 else 
                 { 
                     flag = true; 
                 } 
             } 
             if(flag) 
             { 
                 console.log(i); 
             } 
         } 
    } 
```
Output
```
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
101
103
107
109
113
127
131
137
139
149
151
157
163
167
173
179
181
191
193
197
199
```
## 2.From two sorted arrays, how would you find the common numbers?
### Algorithm
* Start the program
* Initialize two arrays x[],y[] and declare its value
* Create a for loop and take the value of array x[] one by one.
* Using includes() method check
* Whether the elements of array x[] exists in array y[]
* Print the element
* Stop the program
### Psudocode
```javascript
BEGIN
INIT x
INIT y
FOR(let i of x)
IF(y.includes(i))
PRINT(i)
```
### code
```javascript
var x = [1,2,3,4,5,6,7,8,9,10];
var y = [2,4,5,7,11,15];

for(let i of x){
  if(y.includes(i)){
    console.log(i)
  }
}
```
Output
```
2
4
5
7
```
## 3.Explain about function Anatomy, Anonymous function and Assigning function to a variable with an example?
## Anatomy function
### Algorithm
* Create a function with name as cricketAcc and parameters as bat and helmet.                 
* Return the sum of bat and helmet.     
* Create a new variable call the function with new bat name and helmet name.    
* Print the result and stop the program.
### Psudocode
```javascript
//Anatomy function
BEGIN
FUNCTION cricketAcc
RETURN bat+helmet
INIT k
PRINT k
```
### Code
```
function cricketAcc(bat,helmet)
{
return bat+helmet
}
let k=cricketAcc("honda bat ","suprme helmet");
console.log(k)
```
Output
```
honda bat suprme helmet
```
## Anonymous function

### Algorithm
* Start the program.
* Create a function without name and as a setTimeout event callback.
* Print the message after some milliseconds.
* Stop the program
### Psudocode
```javascript
//Anonymous function
BEGIN
setTimeout(function ()
PRINT ("Welcome to javascript")
,100
END
```
### Code
```javascript
setTimeout(function () {
    console.log("Welcome to javascript");
}, 100);
```
Output
```
Welcome to javascript
```
## Assigning function to variable
### Algorithm
* Start the program.
* Assign the function with parameters a and b to the variable s.
* Multiply a and b then return.Instead of calling function we can call that variable.
* Stop the program
### Psudocode
```
//Assigning function to variable
BEGIN
INIT S
RETURN a*b;
PRINT S
END
```
### code
```
let s=function(a,b){
    return a*b;
  }
  console.log(s(4,5));
```
Output
```
20
```
## 4.Show an example of Safeguarding function parameters?
### Algorithm
### Psudocode
```javascript
BEGIN
FUNCTION fun(func)
IF(typeof func == "function")
PRINT(func());
ELSE
PRINT("Its not a function");
INIT array = [];
INIT f = function () 
FUN(array);
END
```
### code
```javascript
function fun(func){
    //Call the function but only if it is a function:
    if(typeof func == "function")
      console.log(func());
      else
      console.log("Its not a function");
}
var array = [];
var f = function () {}
fun(array);//pass array instead of function
```
Output
```
Its not a function
```
## 5.Explain `this` keyword with an example?
### Algorithm
### Psudocode
```javascript
BEGIN
INIT person1
 fullName:function()
 return this.firstName + " " + this.lastName;
INIT person2
 firstName:"abi",
  lastName: "abarna",
PRINT(person1.fullName.call(person2))
END
```
### code
```javascript
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName:"abi",
  lastName: "abarna",
}
console.log(person1.fullName.call(person2));  // Will return "abi abarna"
```
Output
```
abi abarna
```
## 6.How ‘this’ inside the function and class?
### Algorithm
### Psudocode
```javascript
BEGIN
FUNCTION Classmates
constructor(name,age)
this.name=name;
this.age=age;
DISPLAYInfo()
PRINT this.name + "is " + this.age + " years old!";
INIT classmate
PRINT(classmate.displayInfo())
END
```
### code
```javascript
class ClassMates{
	constructor(name,age){
    	this.name=name;
      	this.age=age;
    }
  	displayInfo(){
    	return this.name + "is " + this.age + " years old!";
    }
}

let classmate = new ClassMates("abi abarna",21);
console.log(classmate.displayInfo());  // result: abi abarna is 21 years old!
```
Output
```
abi abarnais 21 years old!
```
## 7.Difference between map, reduce and filter methods? With an example
### Algorithm
```
 //map
* Start the program
* Create the array
* Use the arrow function to work on the map
* Store the variable in the array 
* Print the value
* Stop the program
 //reduce
* Start the program
* Create array to assign variable
* Create arrow function for work with reduce
* Do something with acc value and converted to single value
* Print the value
* Stop the program
 //filter
* Create a array assign to variable
* Create arrow function for work with filter 
* Work on some condition to filter the values
* Print the values
```
### Psudocode
```javascript
///map
BEGIN
INIT numbers
SET map(n=> n * 2)
INIT doubled
PRINT(doubled)
END
//reduce
BEGIN
INIT numbers
INIT initialVal
INIT result
SET reduce((accu, val) => val + accu , initialVal);
PRINT(result)
END
//filter
BEGIN
INIT numbers
INIT greaterThan2
SET filter(n => n > 2);
PRINT(greaterThan2)
END
```
### code
```javascript
//map
var numbers= [1,2,3,4,5];
var doubled  = numbers.map(n => n * 2);
console.log(doubled); // [2,4,6,8,10]
//reduce
var numbers = [1,2,3,4,5];
var initialVal = 0;
let result=numbers.reduce((accu, val) => val + accu , initialVal);
console.log(result) // 15
//filter
var numbers = [1,2,3,4,5];
var greaterThan2 = numbers.filter(n => n > 2);
console.log(greaterThan2); // [3,4,5]
```
Output
```javascript
// map
[2, 4, 6, 8, 10]
//reduce
15
//filter
[3, 4, 5]
```
## 8.Count Total number of zeros from 1 up to 50
### Algorithm
### Psudocode
### code
Output
## 9.The following array of numbers show the missing number? ([1,2,3,5,6])
### Algorithm
### Psudocode
```javascript
BEGIN
INIT missing
INIT i
FOR(i = 0; i < arr.length; ++i)
IF (i + arr[0] !== arr[i]) return i + arr[0];
IF (i< 32)
RETURN i +arr[0];
PRINT missing
END
```
### code
```javascript
var missing = (function (arr) {
    var i;
    for (i = 0; i < arr.length; ++i) {
        if (i + arr[0] !== arr[i]) return i + arr[0];
    }
    if (i < 32)            // if none missing inside array and not yet 32nd
        return i + arr[0]; // return next
}([1,2,3,5,6])); // 4
console.log((missing));
```
Output
```
4
```
## 10.Write a program for calculating age using Date of birth? (1990)
### Algorithm
### Psudocode
### code
Output
## 11.In the Javascript function, what are the differences between call by value and reference?
### Algorithm
### Psudocode
```javascript
//call by value
BEGIN
INIT a
INIT b
b = a;
a = 2;
PRINT a
PRINT b
END
//call by reference
BEGIN
INIT a
INIT b
d = c;
c.greeting = 'you are welcome';
PRINT c
PRINT d
END
```
### code
```javascript
//call by value
	var a = 4;
	var b;
	b = a;
	a = 2;
	console.log(a);
	console.log(b);
//call by reference
	var c = { greeting : 'welcome' };
    var d;
    d = c;
  
    // Mutating the value of c
    c.greeting = 'you are welcome';
    console.log(c);
    console.log(d);
```
Output
```javascript
// call by value
2
4
//call by reference
{greeting: 'you are welcome'}
{greeting: 'you are welcome'}
```
## 12.What is Arity in Javascript? Explain with a real time example.
### Algorithm
* Start the program
* Create a funciton with 3 parameters.
* Get the length of details and assign to a variable.
* Print the variable.
* Stop the program
### Psudocode
```javascript
BEGIN
FUNCTION Details(age,name,place)
FUNCTION END
INIT arity=Details.length
PRINT(arity);
```
### code
```javascript
function Details(age,name,place){

}
let arity=Details.length;
console.log(arity);
```
Output
```
3
```
## 13.What is Currying in Javascript? Explain with a real time example.
### Algorithm
### Psudocode
### code
```javascript
function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(1)(2) ); // 3
  ```
  Output
  ```
  3
  ```
## 14.What is ES6?
```javascript
JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.
 * ECMAScript is the standard that JavaScript programming language uses. 
 * ECMAScript provides the specification on how JavaScript programming language should work.
```
## 15.What is an anonymous function? Where do we use it? Why do we need it?
Anonymous Function is a function that does not have any name associated with it.
  Normally we use the function keyword before the function name to define a function in JavaScript,however,in anonymous functions in JavaScript, we use only the function keyword,  without the function name.
## Code
```javascript
  //Anonymous function
setTimeout(function () {
    console.log("Welcome to javascript");
}, 100);
```
//use
Anonymous functions are often arguments being passed to higher-order functions or used for constructing the result of a higher-order function that needs to return a function. 
 If the function is only used once, or a limited number of times, an anonymous function may be syntactically lighter than using a named function.
//need
The meaning of the word 'anonymous' defines something that is unknown or has no identity.
 In JavaScript, an anonymous function is that type of function that has no name or we can say which is without any name.
 When we create an anonymous function, it is declared without any identifier.
## 16.List the differences between named function and assigning functions to variable with examples
