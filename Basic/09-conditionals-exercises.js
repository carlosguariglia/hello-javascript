/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

process.stdout.write("\x1Bc") // Limpia la consola

// 1. Imprime por consola tu nombre si una variable toma su valor

console.log("Ejercicio 1:")
console.log("Solo imprime por consola tu nombre si una variable toma su valor")

let myName = "Carlos"

console.log("El nombre es: " + myName)
if (myName == "Carlos") {
  console.log("Es correcto, se imprime el nombre: " + myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

console.log("\nEjercicio 2: ")

myName = "Carlos"
myPassword = "1234"

console.log("El usuario es: " + myName + " y la contraseña es: " + myPassword)

if (myName == "Carlos" && myPassword == "1234") {
  console.log("Login correcto")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

console.log("\nEjercicio 3:")

let myNumber = 0

console.log("El numero es: " + myNumber)
if (myNumber > 0) {
  console.log("Es positivo")
} else if (myNumber < 0) {
  console.log("Es negativo")
} else {
  console.log("Es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

console.log("\nEjercicio 4:")

let myAge = 17

console.log("La edad es: " + myAge)

if (myAge >= 18) {
  console.log("Puedes votar")
} else {
  console.log(
    "No puedes votar tienes " +
      myAge +
      " años, te falta(n) " +
      (18 - myAge) +
      " año(s)"
  )
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

console.log("\nEjercicio 5:")

myAge = 17
let estado
console.log("La edad es: " + myAge)
myAge >= 18 ? (estado = "adulto") : (estado = "menor")
console.log("El estado es: " + estado)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "marzo"
console.log("\nEjercicio 6:")
console.log("El mes es: " + mes)

if (mes == "enero" || mes == "febrero" || mes == "marzo") {
  console.log("Es Verano")
} else if (mes == "abril" || mes == "mayo" || mes == "junio") {
  console.log("Es Otoño")
} else if (mes == "julio" || mes == "agosto" || mes == "septiembre") {
  console.log("Es Invierno")
} else if (mes == "octubre" || mes == "noviembre" || mes == "diciembre") {
  console.log("Es Primavera")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

console.log("\nEjercicio 7:")
console.log("El mes es: " + mes)

if (
  mes == "enero" ||
  mes == "marzo" ||
  mes == "mayo" ||
  mes == "julio" ||
  mes == "agosto" ||
  mes == "octubre" ||
  mes == "diciembre"
) {
  console.log("Tiene 31 dias")
} else if (
  mes == "abril" ||
  mes == "junio" ||
  mes == "septiembre" ||
  mes == "noviembre"
) {
  console.log("Tiene 30 dias")
} else {
  console.log("Tiene 28 dias")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "fr"
console.log("\nEjercicio 8:")
console.log("El idioma es: " + language)
switch (language) {
  case "es":
    console.log("Hola")
    break
  case "en":
    console.log("Hello")
    break
  case "fr":
    console.log("Bonjour")
    break
  default:
    console.log("Hello")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

mes = "marzo"
console.log("\nEjercicio 9:")
console.log("El mes es: " + mes)

switch (mes) {
  case "enero":
  case "febrero":
  case "marzo": {
    console.log("Es Verano")
    break
  }
  case "abril":
  case "mayo":
  case "junio": {
    console.log("Es Otono")
    break
  }
  case "julio":
  case "agosto":
  case "septiembre": {
    console.log("Es Invierno")
    break
  }
  case "octubre":
  case "noviembre":
  case "diciembre": {
    console.log("Es Primavera")
    break
  }
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

console.log("\nEjercicio 10:")
console.log("El mes es: " + mes)

switch (mes) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre": {
    console.log("Tiene 31 dias")
    break
  }
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre": {
    console.log("Tiene 30 dias")
    break
  }
  default: {
    console.log("Tiene 28 dias")
    break
  }
}
