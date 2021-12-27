# Javascriptgrammer
## Presentation Format:
### Namely:
imports, classes, constructors, key principles behind functional programming, including many features ranging from ES5 - ES10 These are all covered in this Documentaion.
### ECMA:
Normal Js code  run on browser 
### javascript:
allows to make web page interactive
javascript->It allows us to add dynamic behavior to the webpage and add special effects to the webpage.
Text based programming language
*client side

 web console->web based application enables end users to manage their data.
 console->self service progammed allows to perform operations including 
*download
*backup
*restore
# CHAPTER 2:
## CHROME CONSOLE:
COPY: Copying JSON representation of an existing object to copy buffer
 ```
let object = { property1 : 1, property1 : 2, method : function(){} };
copy(object);
```
## console.dir:
       Basically it is used to show HTML node as a Javascript(instead xml)representation
*displays the object in javascript representation
          console. dir() displays an interactive list of the properties of the specified JavaScript object.
```
let object = { property1 : 1, property1 : 2, method : function(){} };
console.dir(object);
> Object
    >method: ƒ ()
     property1: 2
    >[[Prototype]]: Object
```

### Console.error:
   console. error() method writes an error message to the console.

```
Syntax
console.error(obj1 [, obj2, ..., objN]);
console.error(msg [, subst1, ..., substN]);
```
### console.time() and console.timeEnd():
  The console. time() method starts a timer in the console view. This method allows you to time certain operations in your code for testing purposes. 

 *Use the console. timeEnd() method to end the timer and display the result in the console.
 
```
console.time();
   let arr = Array(1000);
   for(let i=0; i<arr.length; i++) {
   arr[i] = new Object();
   }
   console.timeEnd();  

   console.clear()
```
   This method clears the console



# CHAPTER-3
## ENTRY POINT OF JAVASCRIPT:
*Every computer program has an entry point you can start writing your code directly into <script> tags 
note: it means it will be executed as the script is being download into the browser without concern for DOM or other media.

### DOM-(Document Object Model) is aprogramming API(Application Programming interface)
for HTML documents it defines the logical structure of documents.

 ### DOM CONTENT LOADED:
  Initial HTML Document has been completely loaded and parsed without waiting for
*stylesheets
*images
*sub frames

### DOM READY STATE:
  readyState property describes the loading state of the document . When the value of this property changes, a readystatechange event fires on the document object.
  LOADING->Documents still loading
  INTERACTIVE->documents has finished loading and document has parsed
and subresources such as
*scripts
*images
*style sheets
*frameworks
  COMPLETE->Document and all subresourses have finished loading the state has indicates that load event is about to fire.
  ```
<html>
    <head>
        <title> DOM Loaded.</title>
        <script type="text/javascript">
            function load() {
                console.log("DOM Loaded.");
            }
            if(document.readyState == "loading"){
            document.addEventListener("DOMContentLoaded", load);
            } else {
                load();
            }
        </script>
    </head>
    <body>
      <h1>HEAD</h1>
    </body>
</html>
```
### DOS AND DONT’S:
*Do not write your code just in <script> tags, without entry point function.
*Do use the entry point to initialize the default state of your data and objects.
*Do make your program entry point either DOMContentLoaded, readyState or
the native window.onload method for waiting on media.
### WINDOW ONLOAD:
  With window.onload method, you can wait until all images and similar media
have been fully downloaded.
Including external scripts
  ```
<html>
    <head>Window media loaded.
    <script type = "text\javascript">
        window.onload = function(){

        }
    </script>
    </head>
    <body></body>
</html>
```
### IMPORT:
  used to import bindings that are exported by another module. Using the Javascript import, the code is easier to manage.
```
  <html>
    <head>
        <title>Import Module</title>
        <script type="module">
            import{mouse}from"./script.js";
            mouse();
        </script>
    </head>
    <body>
    </body>
</html>
```
### DYNAMIC IMPORT:
   Is the practice of breaking up your JavaScript modules into smaller bundles and loading them dynamically at runtime.
*imports can be assigned to a variable since EcmaScript 10 (may not be available
in your browser yet, at the time of this writing.

### STRICT MODE:
The strict mode is a feature available since ECMAScript 5 that allows you to place
your entire program, or an isolated scope, in a ”strict” operating context. This
strict context prevents certain actions from being taken and throws an exception.
*Cannot undeclared variables
*Cannot delete variables
*Cannot declare globally
“use strict”;
var v=3;
delete y;


### LITERAL VALUES:
*It have also have numbers and strings
*you can combine literals using operators (+,-,/, etc..)to produce a single result.
 ![aa](https://user-images.githubusercontent.com/88279523/147112878-03d35f3c-0602-4a42-9d66-691c141e3bcf.png)


*The type function can be used to determine the type of literal values.
![bb](https://user-images.githubusercontent.com/88279523/147113209-8def40a5-ce8b-4ba2-9a14-c324f4feac8a.png)

### VARIABLES:
  Variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on.The default value of variables that do not have any value is undefined. You can assign a value to a variable using the = operator when you declare it or after the declaration and before accessing it.

### DYNAMIC TYPING:
  JavaScript is a dynamically-typed language. It means that variables created using
var or let keywords can be dynamically re-assigned to a value of another type at
some point later in your JavaScript program.


### PASSING VALUES BY REFERENCE:
  javascript assings the value by reference without actually making the copy of the orginal values.
let a ={p:2};
let c=b;
let c=b;
let d=c;
let f=d;
a.p=10;
console.log(f.p);
 
 ## CHAPTER 4:
### STATEMENTS:
  A statement is the smallest building block of a computer program. In this chapter
we will explore a few common cases.
    • Definitions made with var, let or const keywords return undefined because they behave only as value assignments: the value is simply stored in the variable name
   let a=1; // undefined
  a;    //1
### EXPRESSIONS:
1+1=2        //2

Expressions don’t have to be variable definitions. You can create them
by simply using some literal values in combination with operators.
let f = function () {return 1};
f();
    • Function f() evaluates to value 1, because it returns 1. This is why f() is often referred to as a function expression.
