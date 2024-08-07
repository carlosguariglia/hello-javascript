/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

process.stdout.write("\x1Bc") // Limpia la consola

// 1. Crea un array que almacene cinco animales

console.log("Ejercicio 1:")
let myArray = ["perro", "gato", "loro", "conejo", "tortuga"]

console.log("El array de animales es: " + myArray)

// 2. Añade dos más. Uno al principio y otro al final

console.log("\nEjercicio 2:")
myArray.unshift("salamandra") // agrega un elemento al principio

console.log("Se agregó un elemento al principio (usando unshift): " + myArray)

myArray.push("ballena") // agrega un elemento al final

console.log("Se agregó un elemento al final (usando push): " + myArray)

// 3. Elimina el que se encuentra en tercera posición

console.log("\nEjercicio 3:")
console.log("Array Original: " + myArray)

let myRemovedElement

myRemovedElement = myArray.splice(2, 1) // elimina un elemento en la tercera posicion (se le indica la posicion y cuantos elementos se quieren eliminar)
// devuelve un array con el o los elementos eliminados (que se asignan a myRemovedElement)

console.log("Elemento eliminado (usando splice): " + myRemovedElement)

console.log("Array Actualizado: " + myArray)

// 4. Crea un set que almacene cinco libros

console.log("\nEjercicio 4:")
let mySet = new Set([
  "El principito",
  "El aleph",
  "La sombra del viento",
  "El señor de los anillos",
  "El resplandor",
])

console.log("El set de libros es: ")
console.log(mySet)

console.log("\n Otra forma de mostrar el set\n")
console.log("El set de libros es: ")
mySet.forEach((value) => console.log(value)) // forEach itera entre los elementos del set => es una funcion flecha

console.log("\n Otra forma de mostrar el set dentro del comando console.log \n")
console.log("El set de libros es: " + [...mySet].join(", ")) // ...mySet convierte el set en un array y .join une los elementos separando los elementos por comas

// 5. Añade dos más. Uno de ellos repetido

mySet.add("La sombra del viento") // al ser un set no se puede agregar un elemento que ya existe (pero no da error)
mySet.add("Harry Potter")

console.log(
  '\n El set de libros ahora es (se agrego "La sombra del viento" que ya estaba): ' +
    [...mySet].join(", ")
)

// 6. Elimina uno concreto a tu elección

let myDatoAEliminar = "La sombra del viento"
mySet.delete(myDatoAEliminar)

console.log("\nEjercicio 6:")

console.log(
  '\n El set de libros ahora es (se elimino "' +
    myDatoAEliminar +
    '"): ' +
    [...mySet].join(", ")
)

// 7. Crea un mapa que asocie el número del mes a su nombre

console.log("\nEjercicio 7:")
let myMap = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
])

console.log("\nEl map de meses es: ")
console.log(myMap)

// igual que el set se puede imprimir el map de distintas formas

console.log("\n Otra forma de mostrar el map\n")
console.log("El map de meses es: ")
myMap.forEach((value, key) => console.log(key + ": " + value))

console.log("\n Otra forma de mostrar el map dentro del comando console.log \n")
console.log("El map de meses es: " + [...myMap].join(", "))

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log("\nEjercicio 8:")

console.log("El mes 5 existe en el map?")
if (myMap.has(5)) {
  console.log("El mes 5 existe en el map y es: " + myMap.get(5))
} else {
  console.log("El mes 5 no existe")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set("verano", [1, 2, 3, 4])

console.log("\nEjercicio 9:")
console.log(myMap)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

console.log("\nEjercicio 10:")
let myArray2 = [
  "El principito",
  "El aleph",
  "La sombra del viento",
  "El señor de los anillos",
  "El resplandor",
]

console.log("El array de libros es: ")
console.log(myArray2)

// Transformar el array en un Set
let mySet2 = new Set(myArray2)

console.log("\nEl set de libros es: ")
console.log(mySet2)

// Crear un Map y almacenar el Set en él
let myMap2 = new Map()
let index = 1
mySet2.forEach((value) => myMap2.set(`libro${index++}`, value)) // las keys en el map son unicas por eso se almacenan llamados libro1, libro2, etc
console.log("\nEl map de libros es: ")
console.log(myMap2)

/* si quisera alamacenar el set en el map sin separar los elementos y almacenar el set completo en el map
  let myMap2 = new Map()
  myMap2.set("libros", mySet2)  // el key seria libros y el value seria el set
  console.log(myMap2)
*/
