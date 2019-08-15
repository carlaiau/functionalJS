import _ from 'lodash'

// Not Curry
let dragon = (name, size, element) => 
    `${name} is a ${size} dragon that breathes ${element}`
console.log('Normal', dragon('carl', 'large', 'lollipops'))

// Curry
let curryDragon =
    name =>
        size =>
            element =>
                `${name} is a ${size} dragon that breathes ${element}`

console.log('Curry', curryDragon('carl')('large')('lollipops'))                

let carl = curryDragon('carl')
console.log('Curry 2', carl('large')('lollipops'))



// Using lodash to make a normal function curry

let newCurryDragon = _.curry(dragon)

console.log('loDash', newCurryDragon('carl')('large')('lollipops'))


// Why would we do this though?!
let animals = [
    {name: 'siloh', species: 'dog'},
    {name: 'ollie', species: 'cat'},
    {name: 'millie', species: 'cat'}
]

// From this.
let isSpecies = (species, obj) => obj.species === species
var cats =  animals.filter(x => isSpecies('cat', x))
console.log('cats', cats)

// To this. 
// This is why we curry
let isSpeciesCurry = _.curry((species, obj) => obj.species === species)
var cats = animals.filter(x => isSpeciesCurry('cat'))

console.log('cats', cats)


