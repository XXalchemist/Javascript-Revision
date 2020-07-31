# Javascript Revision

##           Index                               ##
|**Sr. No**| **Topic Name**|
|---|       ---            | 
|1. | Javascript                      |
|2. | Adding JS to the HTML                       |
|3. | Javascript datatypes                        |
|4. | Variables, Constants, NAN and Comments      |
|5. | Short hand Notation, Ternary operator and Template string | 
|6. | Loose vs Strict Comparison|
|7. | Type Conversion |
|8. | Loops in JS |
|9. | Break and Continue |
|10.| Functions and Methods |
|11.| Arrow Function *=>* |
|12.| ForEach and Callback Methods |
|13.| Date and Time object in JS |
|14.| Array, Set, String and Symbols in JS |
|15.| DOM *(Document Object Manipulation)*|
|16.| Regular Expression |
|17.| Async JS |
|18.| HTTP requests, Callback functions Fetch API|
|19.| Async and Await |
|20.| Throwing and Catching Error |
|21.| Local Storage|
|22.| Objects and Classes in JS |
|23.| More ES6 JS Features (like spread, rest etc) and Modern Feature Support | 

## 1. JavaScript

**JavaScript** often abbreviated as **JS**, is a programming language that confirms to the **ECMAScript** specification.JavaScript is :-

- High-level
- Just-in-time compiled
- Multi-paradigm
- Dynamic typing
   
_It has curly-bracket syntax, prototype-based object-orientation, and first-class functions._

## 2. Adding JS to the HTML file

### Internal

_To write JS code in same HTML file._

```HTML
<script>
    code blocks..
</script>
```

### External

_When JS code is written in different file._

```HTML
<script src = 'JS file location with name eg. /a.js'>
</script>
```

## 3. JS Datatypes

- *Numbers* : To describe any numbers.
- *String*  : To describe any sequence of characters.
- *Boolean* : To describe True or False.
- *Null*    : Explicity set a variable with no value.
- *Undefined*: For Variables that have not yet been defined.
- *Object*   : To describe real world objects.
- *Symbol*   : To uniquely identify objects.

```JS
let age = 21;                   // Number
let lastName = "Krishna";       // String
let fullName = {firstName:"Narayan", lastName:"Krishna"};           // Object
let checkFlag = true           // Boolean
let fav                        // Undefined
let symbolOne = Symbol()       // Symbol
```
`git checkout JS_Datatypes //includes more examples in index.html`

## 4. Variables, Constants, NAN and Comments

### Variables and Constants

> var, let and const were used for storing variables.

_According to ECMA script :-_
- let   : for using variables
- const : for using constant value

### Comments

_Comments are used for describing our code._

```JS
/* Multi line 
   Comment */

// Single Line Comment
```
### NaN

>In JS **NaN** stands for **Not a Number**.

## 5. Short hand Notation, Ternary operator and Template string

- **Short hand notation** is used for assigning values.
- **Template string** is used for formatting string.
<br>_Syntax_ : 
```JS
`Sequence of characters ${variable_name}`
```
- **Ternary operator** is used to shortend conditional statement.
<br>_Syntax_ : 
```JS
Conditional statement ? code blocks if true : code blocks if false or else code blocks   
```
>Some Examples :-
```JS
// Short hand notation

/* +=, *=, /=, %= 
   eg. a+=1 is a = a+1
*/

let a = 5, b = 5
a+=1
console.log(a)
b = b+1
console.log(b)

// Template string
   let name = 'Narayan'
   let greet = `My name is ${name} and hello.`
   console.log(greet)

// Ternary Operator
   let pass = true
   pass ? 'gate open' : 'gate closed'
```