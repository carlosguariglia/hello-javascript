/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

process.stdout.write("\x1Bc") // Limpia la consola

// 1. Crea una variable para cada operación aritmética

let a = 5
let b = 10
let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b

console.log("Ejercicio 1 y 2:")

console.log("el valor de a: " + a)
console.log("el valor de b: " + b)

console.log("Suma: " + suma)
console.log("Resta: " + resta)
console.log("Multiplicación: " + multiplicacion)
console.log("División: " + division)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

a = 5
b = 10

console.log("\nEjercicio 3: ")
console.log("el valor de a: " + a)
console.log("el valor de b: " + b)
console.log("Es a distinto de b?: " + (a != b))
console.log("Es a menor o igual que b?: " + (a <= b))
console.log("ES 0 igual a Falso?: " + (0 == false))
console.log("Es a distinto de b (valor y tipo)?: " + (a !== b))
console.log("Es a menor que b?: " + (a < b))

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("\nEjercicio 4: ")
console.log("Es a igual a b?: " + (a == b))
console.log("Es a mayor o igual que b?: " + (a >= b))
console.log("Es 1 igual a Falso?: " + (1 == false))
console.log("Es a igual a b (valor y tipo)?: " + (a === b))
console.log("Es a mayor que b?: " + (a > b))

// 5. Utiliza el operador lógico and
a = 5
b = 10
c = 15
console.log("\nEjercicio 5: ")
console.log("el valor de a: " + a)
console.log("el valor de b: " + b)
console.log("el valor de c: " + c)
console.log("Es a menor que b y b menor que c?: " + (a < b && b < c))

// 6. Utiliza el operador lógico or

console.log("\nEjercicio 6: ")
console.log("Es a menor que b o b menor que c?: " + (a < b || b < c))

// 7. Combina ambos operadores lógicos

console.log("\nEjercicio 7: ")
console.log(
  "Es a menor que b y b menor que c o es a menor que b y b menor que c?: " +
    (a < b && b < c) ||
    (a < b && b < c)
)

// 8. Añade alguna negación

console.log("\nEjercicio 8: ")
console.log(
  "La negacion del ejercicio anterior es: " +
    !((a < b && b < c) || (a < b && b < c))
)

// 9. Utiliza el operador ternario

console.log("\nEjercicio 9: ")
console.log("Uso del operador ternario a < b ? 'a es menor' : 'b es menor'")
console.log("el valor de a: " + a)
console.log("el valor de b: " + b)
console.log(a < b ? "a es menor" : "b es menor")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log("\nEjercicio 10: ")

console.log("Combinacion de operadores aritméticos")
console.log(
  !((a + a < b && b - b < c) || (a < b && b < c)) ? "Es verdadero" : "Es falso"
)
