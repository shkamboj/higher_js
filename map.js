
// 2nd higher order function map


var animals = [
    {name:'fluffykins', species: 'rabbit'},
    {name: 'caro', species: 'dog'},
    {name: 'Ursula', species: 'cat'}
]

// with for loop
var names = [];

for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}

console.log(names);


console.log('\n');

// with map

var names1 = animals.map(function(animal) {
    return animal.name;
});

console.log(names1);


var complete = animals.map(function(animal){
    return animal.name + "is a " + animal.species;
});

console.log(complete);


// arrow functions 

var names2 = animals.map((animal) => animal.name);
console.log(names2);
