/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

process.stdout.write("\x1Bc") // Limpia la consola

// 1. Concatena dos cadenas de texto

console.log("Ejercicio 1:")
let myName = "Carlos"
let greeting = "Hola, " + myName + "!"

console.log("El valor de myname es: " + myName)

console.log(greeting)

// 2. Muestra la longitud de una cadena de texto

console.log("\nEjercicio 2:")
console.log("El valor de greeting es: " + greeting)
console.log("La longitud de greeting es: " + greeting.length)

// 3. Muestra el primer y último carácter de un string

console.log("\nEjercicio 3:")
console.log("El primer caracter de greeting es: " + greeting[0])
console.log(
  "El ultimo caracter de greeting es: " + greeting[greeting.length - 1]
)

// 4. Convierte a mayúsculas y minúsculas un string

console.log("\nEjercicio 4:")
console.log("El valor de greeting es: " + greeting)
console.log("en mayusculas: " + greeting.toUpperCase())
console.log("en minusculas: " + greeting.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let myName2 = `Esta es una
cadena
de texto en varias
lineas`

console.log("\nEjercicio 5:")
console.log("El valor de myName2 es: " + myName2)

// 6. Interpola el valor de una variable en un string

console.log("\nEjercicio 6:")
let myNumber = 5
console.log(`El valor de myNumber es: ${myNumber}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let myString = "Hola mundo de JavaScript del curso de Brais Moure"

console.log("\nEjercicio 7:")
console.log(myString)
console.log(
  "Reemplazando espacios por guiones (solo en la primera ocurrencia al usar el metodo .replace): " +
    myString.replace(" ", "-")
)
console.log(
  "Reemplazando espacios por guiones (todos al usar el metodo .replaceAll): " +
    myString.replaceAll(" ", "-")
)

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log("\nEjercicio 8:")
console.log("El valor de myString es: " + myString)
console.log("Contiene 'moure'?: " + myString.includes("moure"))
console.log("Contiene 'Moure'?: " + myString.includes("Moure"))

// 9. Comprueba si dos strings son iguales

let myString2 = "Hola mundo"
let myString3 = "Hola mundo"

console.log("\nEjercicio 9:")
console.log("myString2 = " + myString2)
console.log("myString3 = " + myString3)
console.log(myString2 + " es igual a " + myString3 + "?: ")
console.log(myString2 == myString3)

// 10. Comprueba si dos strings tienen la misma longitud

console.log("\nEjercicio 10:")
console.log("myString2 = " + myString2)
console.log("myString3 = " + myString3)
console.log(myString2 + " tiene la misma longitud de " + myString3 + "?: ")
console.log(myString2.length == myString3.length)
