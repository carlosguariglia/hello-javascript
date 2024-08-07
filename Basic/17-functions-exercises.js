/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

process.stdout.write("\x1Bc") // Limpia la consola

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b) {
  return a + b
}

let myvar1 = 5
let myvar2 = 10

console.log("Ejercicio 1:")
console.log("el valor de myvar1: " + myvar1)
console.log("el valor de myvar2: " + myvar2)
console.log(
  "Su suma de " + myvar1 + " y " + myvar2 + " es: " + sum(myvar1, myvar2)
)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function myMax(array) {
  return Math.max(...array)
}

let myArray = [1, 21, 3, 45, 5, 6, 71, 8, 9, 10]

console.log("\nEjercicio 2:")
console.log("el array es: " + myArray)
console.log("el mayor es: " + myMax(myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function countVowels(string) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++
        break
    }
  }
  return count
}

console.log("\nEjercicio 3:")
let myText = "hola mundo"
console.log("la cadena de texto es: " + myText)
console.log("la cadena de texto tiene " + countVowels(myText) + " vocales")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function upperCase(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase())
  }
  return newArray
}

let myArray2 = ["hola", "mundo", "carlos"]
console.log("\nEjercicio 4:")
console.log("el array es: " + myArray2)
console.log("el nuevo array es: " + upperCase(myArray2))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return number > 1
}

console.log("\nEjercicio 5:")
let myNumber = 0
console.log("el numero es: " + myNumber)
console.log("es primo?: " + isPrime(myNumber))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function commonElements(array1, array2) {
  let newArray = []
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        newArray.push(array1[i])
      }
    }
  }
  return newArray
}

let myArray3 = [1, 2, 3, 4, 5]
let myArray4 = [3, 4, 5, 6, 7]
console.log("\nEjercicio 6:")
console.log("el primer array es: " + myArray3)
console.log("el segundo array es: " + myArray4)
console.log("los elementos comunes son: " + commonElements(myArray3, myArray4))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumEven(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i]
    }
  }
  return sum
}

let myArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("\nEjercicio 7:")
console.log("el array es: " + myArray5)
console.log("la suma de los pares es: " + sumEven(myArray5))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function square(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * array[i])
  }
  return newArray
}

let myArray6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("\nEjercicio 8:")
console.log("el array es: " + myArray6)
console.log("el nuevo array cuadrado de cada uno es: " + square(myArray6))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function reversePhrase(string) {
  let words = string.split(" ") // Dividir la cadena en palabras el resultado es un array (words sera un array)

  let reversedWords = words.reverse() // Invertir las palabras (usando el metodo .reverse de los array podemos invertir el array)

  let reversedString = reversedWords.join(" ") // Unir las palabras invertidas en una cadena (junta los elementos del
  //  array reverseWords con el espacio " " devolviendo un string)
  return reversedString
}

let myString9 = "Hola Carlos que tal"

console.log("\nEjercicio 9:")
console.log("La frase original es: " + myString9)
console.log("La frase invertida es: " + reversePhrase(myString9))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(number) {
  if (number < 0) {
    console.log("Error. No se puede factorizar un numero negativo") // maneja el error al ingresar un numero negativo
    return undefined
  }
  let resultado = 1
  for (let i = 1; i <= number; i++) {
    resultado *= i
  }
  return resultado
}

let myNumber2 = 5
console.log("\nEjercicio 10:")
console.log("El factorial de " + myNumber2 + " es " + factorial(myNumber2))
