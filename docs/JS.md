### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B)

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?
```

## Primitive Data Types

### [String](https://developer.mozilla.org/en-US/docs/Glossary/String)

* _symbol_: `string of letters`
* _pronunciation_: "string"
* _examples_:
```javascript
"characters inside of single or double quotes"
```

### [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)

* _symbol_: `false` `true`
* _pronunciation_: "booly-an"
* _examples_:
```javascript
false true
```
### [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined)

* _symbol_: `undefined`
* _pronunciation_: "undefined"
* _examples_:
```javascript
undefined
```
### [number](https://developer.mozilla.org/en-US/docs/Glossary/Number)

* _symbol_: `1 2 3 4 5 ...`
* _pronunciation_: "number..."
* _examples_:
```javascript
1 2 3 4 5
```

## Value Properties

### [infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

* _symbol_: `infinity`
* _pronunciation_: "infinity!"
* _examples_:
```javascript
infinity
```
### [Not a number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

* _symbol_: `NaN`
* _pronunciation_: "Nahn", "Not a number"
* _examples_:
```javascript
"evan" is NaN
```
### [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

* _symbol_: `undefined`
* _pronunciation_: "undefined"
* _examples_:
```javascript
undefined
```
## Assignment Operators

### 1. [+=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `+=`
* _pronunciation_: "equals x plus"
* _examples_:
```javascript
x += y  == x=x+y
```
### 2. [-=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `-=`
* _pronunciation_: "equals x minus"
* _examples_:
```javascript
x -= y  == x=x-y
```
### 3. [*=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `*=`
* _pronunciation_: "equals x times"
* _examples_:
```javascript
x *= y  == x=x*y
```
### 4. [/=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `/=`
* _pronunciation_: "equals x divided by"
* _examples_:
```javascript
x /= y  == x=x/y
```
### 5. [Modulus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `%`
* _pronunciation_: "mod-you-lus"
* _examples_:
```javascript
4 % 2 = 0
```
### 6. [Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `++`
* _pronunciation_: "increment"
* _examples_:
```javascript
3 ++ == 4
```

### 7. [Decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `--`
* _pronunciation_: "de-crement"
* _examples_:
```javascript
4-- = 3
```
### 8. [Unary negation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `-`
* _pronunciation_: "negation"
* _examples_:
```javascript
if x is 4, then -x returns -4
```
### 9. [multiplication](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `*`
* _pronunciation_: "times", "multiplied by", "by"
* _examples_:
```javascript
5 * 2 == 10
```
### 10. [division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

* _symbol_: `/`
* _pronunciation_: "divided by", "over", "out of"
* _examples_:
```javascript
100 / 25 == 4 
```
## Control-flow

### 1. [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
if (x = 4) {
    run this code
}
```

### 2. [if else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
if (x = 4) {
    run this code
} else {
    run different code instead
}
```

### 3. [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
function add (a, b) {
    return(a + b);
}
```

### 4. [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
for (var i = 0; i < 10; i++){
    console.log(i);
}

```

### 5. [do/while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
do {
    x += 1;
    console.log(x);
} while (x <= 10);
```

### 6. [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
while (x < 5) {
    x++;
    console.log(x);
}
```

### 7. [for/in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
for (variable in object){
    code here
}
```

### 8. [for each/in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
var sum = 0;
var obj = {prop1: 3, prop2:10, prop3: 2};
for each (var iten in obj){
    sum += item;
}
console.log(sum); // will log "15"
```

### 9. [comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
var x = 5; // LOL i just used a comment in last section without seeing this is the next one
```

### 10. [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _examples_:
```javascript
throw "Error 404"
```

## Array and Mutator Methods

### Array Literals

var cars = ["Honda", "Toyota", "Ford"]

#### Intergers

var numbers = [15, 22, 999]

#### Floating-Point
**Can have**

* decimal integer which can have + or -
* decimal point
* Fraction
* an exponent (e)

#### Object literals
**Has**

* List of 0 or more pairs of properties and valsues of an object
* these are enclosed by {} and NOT []

*example
```javascript
var car = { myCar: "Honda", getCar: "BMW", special: Sales}
console.log(car.mycar); // Honda
console.log(car[1]); // BMW
```

#### String literals

*example
```javascript
var strings = ["cool ", "string ", "can also \"quote\" in strings"];

console.log(strings[0, 1, 2]); // "cool string can also "quote" in strings"
```

### Array Mutator Methods

### 1. [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)

* Summary: removes the last element from an array and returns it to the caller.
* Syntax: `arr.pop()`

### 2. [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)

* Summary: Adds values to the end of an array
* Syntax: `arr.push()`
* Example:
```javascript
var dogs = ["retriever", "lab"];
var more = dogs.push("pitbull", "terrier");

console.log(dogs); // ["retriever", "lab", "pitbull", "terrier"]
```

### 3. [reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)

* Summary: reverses an arrays order
* Syntax: `arr.reverse()`
* Parameters: none
* Example:
```javascript
var numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); //[3, 2, 1]
```

### 4. [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)

* Summary: removes the first element from an array and returns it.
* Syntax: `arr.shift()`
* Parameters:
* Example:
```javascript
var numbers = [1, 2, 3];
numbers.shift();
console.log(numbers); //[2, 3]
```

### 5. [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)

* Summary: sorts elements of an array in place, and returns that array. Based on unicode point value
* Syntax: `arr.sort()`
* Parameters:
* Example:
```javascript
var numbers = [1, 2, 10, 21];
numbers.sort(); // [1, 10, 2, 21]
```

### 5. [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)

* Summary: sorts elements of an array in place, and returns that array. Based on unicode point value
* Syntax: `arr.sort()`
* Parameters:
* Example:
```javascript
var numbers = [1, 2, 10, 21];
numbers.sort(); // [1, 10, 2, 21]
```
