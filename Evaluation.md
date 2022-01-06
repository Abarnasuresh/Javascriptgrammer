# Javascript Evaluation 1
## 1.Check prime number?
### Algorithm
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
Output:
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
Output:
```
2
```
## 8.Remove duplicate from the following array? ([1,2,9,4,5,8,3,5,1,4,5])
### Algorithm
### Psuedocode
### Code
```
let chars = [1,2,9,4,5,8,3,5,1,4,5];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);
```

Output:
```
[1, 2, 9, 4, 5, 8, 3]
```
## 9.Write a program to calculate the sum of the first 10 natural numbers?












