// Functor, equals a function that takes a value, and a function
// Unwraps the value into individual parts and passes these individuals into 
// the function and then creates a data structure to join the outputs of 
// all the function  calls. Map, and filter are both functors

// Technically this definition is wrong. The thing that is actually the functor
// is the object that implements the map method. Therefore in JS's case,
// the functor is actually Array.
// Described here: https://www.youtube.com/watch?v=DisD9ftUyCk

// This will allow us to add a string like "ABC" and convert it to "BCD"
// or "DEF" and convert it to "CDE"
stringFunctor = (value, fn) => 
    value.split("").map((char) =>
        String.fromCharCode(fn(char.charCodeAt(0)))
    ).join("")

plus1 = (value) => value + 1

minus1 = (value) => value - 1


console.log(
    stringFunctor("ABC", plus1) + " " + stringFunctor("XYZ", minus1)
)

