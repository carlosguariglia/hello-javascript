/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

process.stdout.write("\x1Bc") // Limpia la consola

// 1. Crea un bucle que imprima los números del 1 al 20

console.log("Ejercicio 1:")
console.log("\nLos números del 1 al 20 son:")
for (let i = 1; i <= 20; i++) {
  console.log(i)
}

// 1,5 Crea un bucle que imprima los números del 1 al 20 y los imprima en la misma línea separados por comas

console.log("Ejercicio 1.5:")
console.log("\nLos números del 1 al 20 son:")
let numbers = [] //se usa un array vacio
for (let i = 1; i <= 20; i++) {
  numbers.push(i) // push agrega elementos al array
}
console.log(numbers.join(", ")) // join une los elementos separando los elementos por comas

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

console.log("\nEjercicio 2:")
let sum = 0
for (let i = 1; i <= 100; i++) {
  sum += i
}
console.log("\nla suma de los números del 1 al 100 es: " + sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

console.log("\nEjercicio 3:")
console.log("\nLos números pares del 1 al 50 son:")
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

console.log("\nEjercicio 4:")
console.log("\nLos nombres del array son:")
let myNames = ["Carlos", "Juan", "Pedro"]
for (let i = 0; i < myNames.length; i++) {
  console.log(myNames[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

console.log("\nEjercicio 5:")
let myText = "Hola, me llamo Carlos"
let count = 0
for (let i = 0; i < myText.length; i++) {
  switch (myText[i]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      count++
      break
  }
}

console.log("la cadena de texto es: " + myText)
console.log("\nla cadena de texto tiene " + count + " vocales")

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

console.log("\nEjercicio 6:")
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let product = 1
for (let i = 0; i < myNumbers.length; i++) {
  product *= myNumbers[i]
}
console.log("\nel array de numeros es: " + myNumbers)
console.log("El producto de los numeros es: " + product)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

console.log("\nEjercicio 7:")
console.log("\nLa tabla del 5 es:")
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + 5 * i)
}

// 8. Usa un bucle para invertir una cadena de texto

console.log("\nEjercicio 8:")
let myText2 = "Hola, me llamo Carlos"
let reversedText = ""
for (let i = myText2.length - 1; i >= 0; i--) {
  reversedText += myText2[i]
}
console.log("\nla cadena de texto es: " + myText2)
console.log("la cadena de texto invertida es: " + reversedText)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

console.log("\nEjercicio 9:")

let fibonacci = [0, 1] // se crea un array con los dos primeros elementos de la secuencia
for (let i = 2; i < 10; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]) // a partir de 2, se calcula la suma de los dos anteriores
}
console.log(
  "\nlos primeros 10 numeros de la secuencia de Fibonacci son: " + fibonacci
)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

console.log("\nEjercicio 10:")
let myNumbers2 = [
  11, 2, 31, 4, 5, 6, 71, 8, 9, 1, 11, 22, 9, 14, 7, 16, 5, 18, 0,
]
let myNumbers2Greater10 = []
for (let i = 0; i < myNumbers2.length; i++) {
  if (myNumbers2[i] > 10) {
    myNumbers2Greater10.push(myNumbers2[i])
  }
}
console.log(
  "El array orignal es : " +
    myNumbers2 +
    "\nlos elementos del array mayor a 10 son: " +
    myNumbers2Greater10
)
