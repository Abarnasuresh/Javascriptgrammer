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
* Create the for loop
  (i) Get the length of the string 
* As long i is less than the length the loop get repeated 
  (ii) Increament i after each iteration
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

