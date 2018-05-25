const numbers=['one','two','three','four']
console.log(numbers.shift())//remove first element
console.log(numbers)
console.log(numbers.unshift('five'))//add first element
console.log(numbers)
console.log(numbers.pop())
console.log(numbers)

numbers.splice(2,1,'six')//removes elements and inserts new elements
console.log(numbers)
