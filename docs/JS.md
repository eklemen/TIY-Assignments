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

### 6. [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)

* Summary: changes the content of an array by removing existing elements and or adding new elements
* Syntax: `array.splice(start, deleteCount[, item1[, item2[,...]]])`
* Parameters: start, deleteCount, itemN
* Example:
```javascript
var cars = ["bmw", "honda", "toyota"];
cars.splice(2, 0, "ford") //this removes 0 elements from index 2, and insers "ford"

var cars = ["bwm", "honda", "toyota"];
cars.splice(2, 1, "ford") //removes 1 element from index 2, and inserts "ford"
result: ["bmw", "honda", "ford"]
```

### 7. [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)

* Summary: adds one or more elements to thebeginning of an array and returns the new length of the array.
* Syntax: `arr.unshift()`
* Parameters: elementN
* Example:
```javascript
var arr = [1, 2];

arr.unshift(0); //result of call is 3, which is the new array length
arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
//arr is [-2, -1, 0, 1, 2]
```

### Literal: `Array`
. . .

#### Iterator Methods

##### `Array.prototype.every`

* _params:_
  * `callback`: `Function` to test each element against
    * _params:_
      * `item`: element to process
      * `index`: index of processed element
      * `all`: array instance
    * _returns:_ `Boolean`
  * `thisArg`: `Object` to which to bind `callback`
* _returns:_ `Boolean` whether `callback` returns `true` for _every_ element
* _example:_
```javascript
function every(anArray, callback){
  var hasFailed = false; // it hasn't has it?

  // iterate...
  anArray.foreach(function(item, index, all){
    if ( hasFailed ) return; // one failure ruins everything...

    hasFailed = !callback(item, index, all); // why invert here?
  });

  return !hasFailed; // Another inverse?
  // What if `anArray` is empty?
}
```

##### `Array.prototype.forEach`

* _params:_
  * `callback`: `Function` to test each element against
    * _params:_
      * `currentValue`: current element being processed
      * `index`: index of processed element
      * `array`: the array forEach() was called upon
    * _returns:_ `Boolean`
  * `thisArg`: Optional, value to use as this when executing `callback`
* _returns:_ the provided `callback` once for each element present in the array in ascending order
* _example:_
```javascript
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}
[2, 5, , 9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[3] = 9

```
##### `Array.prototype.some`

* _params:_
  * `callback`: `Function` to test each element against
    * _params:_
      * `currentValue`: current element being processed
      * `index`: index of processed element
      * `array`: the array some() was called upon
    * _returns:_ `Boolean`
  * `thisArg`: it will be passed to `callback`
* _returns:_ `true` if any of the `callback`'s returns a true value, otherwise `false` is returned.
* _example:_
```javascript
function isBiggerThan10(element, index, array) {
    return element > 10;
}

[2, 5, 8, 1, 4].some(isBIggerThan10); //false
[12, 5, 8, 1, 4].some(isBiggerThan10); //true
```
##### `Array.prototype.map`

* _params:_
  * `callback`: `Function` to test each element against
      * _params:_
      * `currentValue`: current element being processed
      * `index`: index of processed element
      * `array`: the array `map` was called upon
  * `thisArg`: Optional, value to use as this when executing a `callback`
* _returns:_ constructs a new array after testing the `callback` based on its values. values of undefined do not invoke the `callback` 
* _example:_
```javascript
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
    return num * 2;
});
// double is now [2, 8, 18]. nubers is still [1, 4, 9]
// also we could take Math.sqrt

var roots = numbers.map(function(Math.sqrt));
// roots is now [1, 2, 3]
```
##### `Array.prototype.reduce`

* _params:_
  * `callback`: `Function` to test each element against
      * _params:_
      * `previousValue`: value previously returned in the ast invocation of the callback, or initialValue
      * `currentValue`: current element being processed in the array
      * `index`: index of processed element
      * `array`: the array `reduce` was called upon
  * `initialValue`: Optional, value to use as the first argument to the first call of the callback
* _example:_
```javascript
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array){
    return previousValue + currentValue;
});

// callback would be invoked 4 times
            previousValue  currentValue  index return-value
first call         0            1           1       1
second call        1            2           2       3
third call         3            3           3       6
fourth call        6            4           4       10
```
##### `Array.prototype.reduceRight`

* _params:_
  * `callback`: `Function` to test each element against
      * _params:_
      * `previousValue`: value previously returned in the ast invocation of the callback, or initialValue
      * `currentValue`: current element being processed in the array
      * `index`: index of processed element
      * `array`: the array `reduceRight` was called upon
  * `initialValue`: Optional, value to use as the first argument to the first call of the callback
* _example:_
```javascript
[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array){
    return previousValue + currentValue;
});

// callback would be invoked 4 times
            previousValue  currentValue  index return-value
first call         4            3           3       7
second call        7            2           2       9
third call         9            1           1       10
fourth call        10           0           0       10
```




