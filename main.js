//1 Destructuring

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ]
  
  // Extrae la empleada Ana con todos sus datos personales:
  
  const [,n2] = empleados
  console.log(n2)

  // Extrae el email del empleado Luis
 
  const [name1,name2,name3] = empleados
  const {email} = name1
  console.log(email)
  //const [empleado1] = empleados
  //const{email:correoempleado1} = empleado1
  //console.log(correoempleado1)
  
  const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon
// Extrae el tipo de Pokemon que es

const {name:nombre, type, ability, stats, moves} = pokemon
console.log(nombre)
console.log(type)

// Extrae el movimiento “Tackle”

const [, tackel] = moves
console.log(tackel)

//2 Spread/Rest

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior

const mergearPokemons = {...pokemon, ...pikachu}
console.log(mergearPokemons);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

//No entiendo el enunciado, sorry y con la solución tampoco me queda muy claro :/

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

//Idem

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.


function countTheArgs(){
    return arguments.length
}

console.log(countTheArgs("gato", "perro"));
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(a, b) {
    return [...a, ...b]
  }
  
  console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]))