function convert(num, str) {
  let output = "";
  if (str.toUpperCase() === "MI" && typeof num === "number")
    output = parseFloat((num * 1.60934).toFixed(2)) + " km";
  else if (str.toUpperCase() === "KM" && typeof num === "number")
    output = parseFloat((num * 0.621371).toFixed(2)) + " mi";
  else output = "Error de parametros";
  return output;
}

// Ejercicio 14
// Crear una función de JavaScript llamada convert (Convertir) que reciba como parámetros un número y un string. El primer parámetro corresponde a una distancia (número) y el segundo parámetro corresponde a una unidad (string) que puede ser kilómetros ("km") o millas ("mi"). La función debe retornar un string con la cantidad ingresada convertida a la otra unidad (millas o kilómetros).
// Nota: El número resultante no puede tener más de 2 decimales, por lo que es necesario hacer el redondeo correspondiente.
// // Ejemplos:
// Input --------------> Output
// convert(0, "mi") ---> "0 km"
// convert(0, "km") ---> "0 mi"
// convert(100, "mi") ---> "160.93 km"
// convert(100, "km") ---> "62.14 mi"
