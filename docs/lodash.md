### [`_.reject`](http://lodash.com/docs#reject)

* _params:_
  * (collection, [predicate=.identity], [thisArg])
  * collection (Array|Object|string): The collection to iterate over.
  * [predicate=_.identity] (Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
  * [thisArg] (*): The this binding of predicate.
* _returns:_
  * `array` returns the new filtered array
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?

### [`_.where`](http://lodash.com/docs#where)

* _params:_
  * (collection, source)
  * collection (Array|Object|string): The collection to search.
  * source(Object): the object of propterty values to match
* _returns:_
  * `array` returns the new filtered array
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?

### [`_.every`](http://lodash.com/docs#every)

* _params:_
  * `Array`|`Object`|`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate` considered for each iteration
    * a callback `Function`
      * is invoked with: `value`, `index`|`key`, `collection`
      * should return `Boolean` whether iteration passes `predicate`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
  * `thisArg` binding for `predicate`
* _returns:_
  * `Boolean` whether `predicate` passes for every `value` in `collection`
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?

### [`_.prototype.reverse`](https://lodash.com/docs#prototype-reverse)

* _returns:_
  * `Object`: returns the new reversed `lodash` object
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?

### [`_.sortedIndex`](http://lodash.com/docs#sortedIndex)

* _params:_
  * (array, value, [iteratee=.identity], [thisArg])
* _returns:_
  * `number` returns the index at which `value` should be instered into array
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?
  
  ### [`_.sortedLastIndex`](http://lodash.com/docs#sortedLastIndex)

* _params:_
  * (array, value, [iteratee=.identity], [thisArg])
* _returns:_
  * `number` returns the index at which highest `value` should be instered into array first
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?
  
  ### [`_.slice`](http://lodash.com/docs#slice)

* _params:_
  *  array: the array to slice
  * [start=0](number): the start position
  * [end=array.length](number): end position
* _returns:_
  * `array` returns the new slice of array
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?
  
  ### [`_.toString`](http://lodash.com/docs#prototype-toString)

* _returns:_
  * `string` returns the coerced string value
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?
  
  ### [`_.indexOf`](http://lodash.com/docs#indexOf)

* _params:_
  * arrayL the array to search
  * value(*): the value to search for
  * [fromIndex=0](boolean|number): the index to search from or true to perform a binary search on a sorted array
* _returns:_
  * `number` returns the index of the matched values, else -1
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...