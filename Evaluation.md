# Javascript Evaluation 1
## 1.Check prime number?
### Algorithm
### Psuedocode
### Code
Output
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



