/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

process.stdout.write("\x1Bc") // Limpia la consola

// 1. Escribe un comentario en una línea

// este es un comentario de una sola linea

// 2. Escribe un comentario en varias líneas

/* este es un comentario
multilinea */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myVariable = "Hola" // String
let myVariable2 = 5 // Numero entero
let myVariable3 = true // Boolean
let myVariable4 = undefined // Undefined
let myVariable5 = null // Null
let myVariable6 = Symbol() // Symbol
let myVariable7 = 5.5 // Numero decimal
let myVariable8 = BigInt(1234567890123456789012345678901234567890) // BigInt

// 4. Imprime por consola el valor de todas las variables

console.log("Ejercicio 4:")
console.log(myVariable)
console.log(myVariable2)
console.log(myVariable3)
console.log(myVariable4)
console.log(myVariable5)
console.log(myVariable6)
console.log(myVariable7)
console.log(myVariable8)

// 5. Imprime por consola el tipo de todas las variables

console.log("\nEjercicio 5:")
console.log(typeof myVariable)
console.log(typeof myVariable2)
console.log(typeof myVariable3)
console.log(typeof myVariable4)
console.log(typeof myVariable5)
console.log(typeof myVariable6)
console.log(typeof myVariable7)
console.log(typeof myVariable8)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myVariable = "10"
myVariable2 = 20
myVariable3 = false
myVariable4 = 30
myVariable5 = 40
myVariable6 = Symbol("Hello")
myVariable7 = 6.7
myVariable8 = 12345678901234567890123456789012345678901

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myVariable = 10
myVariable2 = "20"
myVariable3 = "hola mundo"
myVariable4 = 30
myVariable5 = 40
myVariable6 = Symbol("Hello")
myVariable7 = null
myVariable8 = 1.301

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myConst1 = "Hola"
const myConst2 = 5
const myConst3 = true
const myConst4 = undefined
const myConst5 = null
const myConst6 = Symbol()
const myConst7 = 5.5
const myConst8 = BigInt(1234567890123456789012345678901234567890)

// 9. A continuación, modifica los valores de las constantes

// myConst1 = "11" no se puede cambiar el valor de una constante

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
