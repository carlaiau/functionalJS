// include reject
Array.prototype.reject = function(fn){
    return this.filter(x => !fn(x))
}
var animals = [
    {name: 'carl', species: 'man'},
    {name: 'charlie', species: 'man'},
    {name: 'sez', species: 'woman'},
    {name: 'cath', species: 'woman'},
    {name: 'siloh', species: 'dog'},
    {name: 'ollie', species: 'cat'}
]

/*
 * Filter
 * Non functional approach
 * 
 * 
var dogs = []
for(var i=0; i < animals.length; i++){
    if(animals[i].species === 'dog'){
        dogs.push(animals[i])
    }
}
*/


// Completely decoupled
var isDog = (x) => x.species === 'dog'

var dogs = animals.filter(isDog)

var others = animals.reject(isDog)

console.log("Dogs", dogs)
console.log("Non Dogs", others)

// There is also the .find function, which returns the first item found
// rather than a sub array

/*
 *
 * Map
 * Non functional approach
 * 
 
var names = []
for(var i = 0; i < animals.length; i++){
    names.push(animals[i].name)
}
*/

var getNames = (x) => x.name
var names = animals.map(getNames)


console.log("names", names)