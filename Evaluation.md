# Javascript Evaluation 1
## 1.Check prime number?
### Algorithm
* Start the program
* Define the function checkPrime() with one argument as num
* If num is equal to 2, then return true
* Else if, the num is greater than 1, then use “for loop” and declare a variable i
* In for loop, find the modulo division of which num is not equal to zero and return true
* Else if, the num equal to i2, return the result as false
* Else, return false and exit out of the second if condition
* If num is not greater than 1, then return false
* Use Console.log() function and call the checkPrime() function
* Print the output
* Stop the program
### Psuedocode
### Code

```
function checkPrime(num) 
{ 
if (num === 2) 
{ 
return true;
}
 else if (num > 1)
{
 for (var i = 2; i < num; i++)
{
 if (num % i !== 0)
{
 return true;
}
 else if (num === i * i)
{
 return false;
}
 else
{
 return false;
} 
}
}
else 
{
return false;
}
}
console. log(checkPrime(7));
```
Output
```
true
```
## 2.What is difference between == and === with an example?
* == is used for comparison between two variables irrespective of the datatype of variable.
* === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
### Algorithm
* Start the program
* Declare the variable ‘a’ and assign the value as true
* Declare the variable ‘b’ and assign the value as 1
* Declare the variable ‘c’ and assign the value as true
* Use console.log() function for comparing the variables
* In the first step, check if a==b. It first converts 1 into Boolean and then compare the values
* In the second step, check if a===c. In this case, both are of same type. So, no conversion required. It simply compares the values
* In the third step, check if a===b. In this case, no conversion performed, because type of operands is of not the same type
* Print the output
* Stop the program
### Psuedocode
### Code

```
let a=true;
let b=1;
let c=true;
console.log(a==b);//first convert 1 into boolean then compare
console.log(a===c);// both are of same type no conversion reqired simple compare.
console.log(a===b);//no conversion perfomed and type of both operands are not same type so expected result is false

```

Output

```
true
true
false
```
## 3.How would you reverse a string in JavaScript?
### Algorithm
* Create a function reversestring(str)
* Use the split method to return a new array split(" ")
* Use the reverse method to reverse the new created array reverse()
* Use the join method to join all elements of the array into a string join(" ")
* Return the reversed string.
### Psuedocode
### Code
```
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
```
output
```
'olleh'
```
## 4.How would you reverse words in a sentence?
### Algorithm
* Start the program
* Create a function reverseInplace(str)
* Create an empty array to store the string into array
* Create an empty string that will store the new reversed string
* Create the forloop

  i).Get the length of the string 
  * As long i is less than the length the loop get repeated 
      
  ii).Increament i after each iteration
  * Return the reversed string
### Psuedocode
### Code

```
function reverseInPlace(str) {
    var words = [];
    words = str.split("\s+");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        return result += words[i].split('').reverse().join('');
    }
}
console.log(reverseInPlace("abd fhe kdj"))
```
Output
```
jdk ehf dba
```
## 5.How will you verify a word as a palindrome?
### Algorithm
* Initialize the function validatepalin
* Create a variable length ln to get the length of the given string
* Create a forloop to reverse the string
* Compare the reverse string with the actual string if both are same return true else return false
* Stop the program
### Psuedocode
### Code
```
function validatePalin(str){
const len=string.length;
for(let i=0;i<len/2;i++){
if(string[i]!==string[len-1-i]){
alert("it is not a palindrome");
}
}
alert("it is a palindrome");
}
const string=prompt("enter a string number:");
const value=validatePalin(string);
console.log(value);
```
Output
## 6.Write your own program to explain the difference between forEach and map?
### Algorithm
* Start the program
* Create a function practice()
* Create a new array element a[] to store input value
* Create two empty array elements b[] c[]
* Create for each method for given array input and store in b
* Print b
* Create a map method for the given input array and store the value in c 
* Print c
* Stop the program
### Psuedocode
### Code
```
function practice (i){
    return i+1;
};
var a = [ -1, 0, 1, 2, 3, 4, 5 ];
var b = [ 0 ];
var c = [ 0 ];
console.log(a);
b = a.forEach(practice);
console.log("=====");
console.log(a);
console.log(b);
c = a.map(practice);
console.log("=====");
console.log(a);
console.log(c);
```
Output
```
[ -1, 0, 1, 2, 3, 4, 5 ]
=====
[ -1, 0, 1, 2, 3, 4, 5 ]
undefined
=====
[ -1, 0, 1, 2, 3, 4, 5 ]
[ 0, 1, 2, 3, 4, 5, 6 ]
```
## 7.Generate a random number between 1 to 5?
### Algorithm
* Start the program
* Create a variable rndInt
* Create the method math.floor() to print random number 1 to 5
* 1 is the start number
* 5 is the number of possible results(1+start(5)-end(1))
* Print the output
* Stop the program
### Psuedocode
### Code
```
const rndInt=
Math.floor(Math.random() * 5) + 1
console.log(rndInt)
```
Output
```
2
```
## 8.Remove duplicate from the following array? ([1,2,9,4,5,8,3,5,1,4,5])
### Algorithm
* Start the program
* Declare an array ‘chars’ and define the values [1,2,9,4,5,8,3,5,1,4,5]
* Define the variable ‘uniqueChars’ and use the filter() function to perform the deduplication function
* Find the index value using the chars.indexOf() function
* Print the output
* Stop the program
### Psuedocode
### Code
```
let chars = [1,2,9,4,5,8,3,5,1,4,5];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);
```

Output
```
[1, 2, 9, 4, 5, 8, 3]
```
## 9.Write a program to calculate the sum of the first 10 natural numbers?
### Algorithm
* Start the program
* Initialize a variable for sum s=0
* iterate a for loop from 1 to 10 for(i=1;i<=10;i++)
* Increment the value of s by one
* Print the result
### Psuedocode
### Code
```
let s = 0;
for (i = 1; i <= 10; i++) {
  s = s + i;
}
console.log("Sum of first 10 natural numbers:" + s);
```
Output
```
Sum of first 10 natural numbers:55
```
## 10.Write a program to print the sum of the even and odd numbers for a given number? (100)?
### Algorithm
* Start the program
* Declare the variable ‘n’ and assign the value as 100
* Declare the variable ‘oddSum’ and assign the value as 0
* Declare the variable ‘evenSum’ and assign the value as 0
* Declare the variable ‘i’ and assign the value as 1
* Use the while loop for checking the value of ‘i’ less than ‘n’
* If yes, then find the modulo division of ‘i’ by 2 and if equals 0, then add the ‘evenSum’ value with the value of ‘i’
* If not, add the ‘oddSum’ value with the value of ‘i’
* Increment the value of ‘i’ at the end of the while loop
* Print the output
* Stop the program
### Psuedocode
### Code
```
var n = 100;
var oddSum = 0;
var evenSum = 0;
var i = 1; // initialization
while(i <= n){ // condition
  if(i % 2 == 0){
    evenSum += i;
  } else {
    oddSum += i;
  }
  i++; // incrementation
}
console.log(oddSum, evenSum);
```
Output
```
2500 2550
```
## 11.Write a program to merge two arrays? ([1,2,9,3,5,1,4,5], [11,54,70,40])
### Algorithm
* Start the program
* Initialize two variable to store the 2 array inputs
* Create a for loop and repeat it untill value leads the length of 2nd array
* Store the array element to the 1st array
* Print the merged array
### Psuedocode
### Code
```
const merge=(yes,no)=>{
for(let i=0; i< no.length; i++){
yes.push(no[i]);
}
return yes;
}
let merged=merge([1,2,9,3,5,1,4,5],[11,54,70,40]);
console.log(merged);
```
Output
```
[1, 2, 9, 3, 5, 1, 4, 5, 11, 54, 70, 40]
```
## 12.Remove duplicate from an array of an object by id and name? a. [{id: 1, name: ‘Stephen covey’ }, {id: 2, name: ‘Robin Sharma’ }, {id: 3, name: ‘Tolstoy’}, {id: 3, name: ‘Tolstoy’}, {id: 5, name: ‘James clear’}] 
### Algorithm
### Psuedocode
### Code
```
const removeObj=[{id:1,name:"stephen covey"},{id:2,name:"robin sharma"},{
 id:3,name:"Tolstoy"},{id:3,name:"Tolstoy"},{id:5,name:"james clear"}];
const dupArr=removeObj.map(item=>{
 return [item.name,item]
});
const maparr=new Map(dupArr);
const result=[...maparr.values()];
console.log(result);
```
Output
```
[{…}, {…}, {…}, {…}]
```
## 13.Compare two objects, If all properties are equal return true or return false? a. ({id: 1, name: “edison”}, {id: 1, name: “edison”}) b. ({id: 1, name: “edison”}, {id: 2, name: “edison”}) 
### Algorithm
### Psuedocode
### Code
```
const obj1={id:1,name:"edison"}
const obj2={id:2,name:"edison"}
const haveCompare=function(obj1,obj2){
 const obj1keys=Object.keys(obj1);
 const obj2Keys=Object.keys(obj2);
 if(obj1keys.length !==obj2Keys.length){
 return true
 }
 for(let key of obj1keys){
 if(obj1[key]!==obj2[key]){
 return false;
 }
 }
 return true;
};
console.log(haveCompare(obj1,obj2));
```
## 14.Take a multidimensional array and flat the array?[1,4,2,3,[10,20,20], [100,500,700,600], [2000,1000]] 
### Algorithm
* Start the program
* Initialize a array variable multi to store the inputs
* Create a method multiflat() to flat the array
* Stop the program
### Psuedocode
### Code
```
const Multi= [1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]]
console.log(Multi.flat(Infinity));
```
Output
```
[1, 4, 2, 3, 10, 20, 20, 100, 500, 700, 600, 2000, 1000]
```
## 15.Group by the id of the following array of objects using the Array.reduce method? [{id: 1, name: ‘edison’ }, {id: 2, name: ‘Annand’ }, {id: 3, name: ‘Vasnath’}]
### Algorithm
* Start the program
* Declare a constant array ‘arr’ and assign the values of ‘id’ and ‘name’
* Declare the variable ‘result’ and use the reduce() function to find the previous and current array values
* Assign the current value to the previous value of current.id
* Return the previous value at the end of the function
* Print the output
* Stop the program
### Psuedocode
### Code
```
const arr= [ {id:1,name:"edison"},
{ id:2,name:"aanand"},
{id:3,name:"vasanth"}
]
let result=arr.reduce((prev,current)=>{
prev [current.id]=current;
return prev;},{});console.log(result)
```
Output
```
{1: {…}, 2: {…}, 3: {…}}
```
## 16.Write a program in Javascript to display the pattern like right angle triangle using an asterisk.The pattern like:
```
*
**
***
****
*****
```
### Algorithm
* Start the program
* Declare a variable ‘n’ and assign the value as 5
* Declare an empty string variable ‘string’ with null value
* Use two ‘for loops’ and check the conditions if ‘i’ is less than or equal to ‘n’ and ‘j’ is less than ‘n-1’
* If yes, then add an empty space with the ‘string’ value, else exit from the first for loop
* Use another for loop and check the condition if ‘k’ is less than ‘i’
* If yes, add * to the ‘string’ value, else exit the for loop
* Print the output
* Stop the program
### Psuedocode
### Code
```
let n=5;
let string="";
for(let i=1; i<=n; i++){
for (let j=0; j<n-i; j++){
string+="";
}
for(let k =0; k<i; k++){
string+="*";
}
string+="\n"
}
console.log(string);
```
Output
```
*
**
***
****
*****
```
## 17.Write a program in Javascript to make such a pattern like right angle triangle with number increased by 1
```
1
2 3
4 5 6
7 8 9 10
```
### Algorithm
* Input the number of rows A 
* Initialize count=1
* Iterate the rows by creating outer loop from 1 to n
   for(i=1;i<=n;i++)
* Iterate the column by inner loop from 1 to i
   for(j=1;j<=i;j++)
* Print the count value
* Increament the count by 1
### Psuedocode
### Code
```
let n = 4; // height of pattern
let string = "";
let count = 1;
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);
```
Output
```
1
2 3
4 5 6
7 8 9 10
```
## 18.Write a program in Javascript to make such a pattern like a pyramid with numbers increased by 1
```
    1 
   2 3 
  4 5 6 
 7 8 9 10 
```
### Algorithm
* Start the program
* Declare an empty string variable ‘number’ with null value
* Declare a variable ‘count’ and assign the value as 1
* Use two ‘for loops’ and check the conditions if ‘i’ is less than 5 and ‘j’ is less than or equal to ‘5-i’
* If yes, then add an empty space with the ‘number’ value, else exit from the first for loop
* Use another for loop and check the condition if ‘k’ is less than ‘2 * i - i’
* If yes, add the value of variable ‘count’ with number and increment the variable ‘count
* Finally, add an empty space with the ‘number’ value, else exit from the for loop
* Print the output
* Stop the program
### Psuedocode
### Code
```
let number = "";
let count=1;
for (let i = 1;i<5;i++) {
  for (let j = 1;j<= 5 - i;j++){
    number += " ";
  }
  for (let k = 0; k < 2*i-i ; k++) {
    number += count;
    count++;
    number += " ";
  }
  number += "\n";
}
console.log(number);
```
Output
```
    1 
   2 3 
  4 5 6 
 7 8 9 10 
```
## 19.Write a program in Javascript to display the pattern like a diamond
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```
### Algorithm
* Start the program
* Declare an empty string variable ‘string’ with null value
* Declare a variable ‘n’ and assign the value as 5
* Use two ‘for loops’ and check the conditions if ‘i’ is less than ‘n’ and ‘j’ is greater than ‘i’
* If yes, then add an empty space with the ‘string’ value, else exit from the first for loop
* Use another for loop and check the condition if ‘k’ is less than ‘i*2-1’
* If yes, add * to the ‘string’ value, else exit the for loop
* Again, use two ‘for loops’ and check the conditions if ‘i’ is less than ‘n-1’ and ‘j’ is less than ‘i’
* If yes, then add an empty space with the ‘string’ value, else exit from the first for loop
* Use another for loop and assign the value of ‘k’ is equal to ((n-i) * 2-1) & check the condition if ‘k’ is greater than 0 and decrement the variable ‘k’
* If yes, add * to the ‘string’ value, else exit the for loop
* Print the output
* Stop the program
### Psuedocode
### Code
```
let n = 5;
let string = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
```
Output
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```


HNJ




