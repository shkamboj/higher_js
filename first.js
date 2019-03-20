
// higher order function example

var animals = [
    { name: 'ansdf', species: 'dog'},
    { name: 'caro', species: 'cat'}
]

var dog = animals.filter(function(animals){
    return animals.species==='dog'; 
})


var not_dog = animals.filter(function(animals){
    return animals.species!=='dog'; 
})

// filter function is a host function and function
// which is inside is known as callback function.

console.log(dog);
console.log('\n');
console.log(not_dog);