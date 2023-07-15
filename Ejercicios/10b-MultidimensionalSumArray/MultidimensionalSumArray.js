function mdArraySum (arr) {
  // Your code here:
  let sum = 0; // variable para almacenar la suma

  // Función recursiva para recorrer el arreglo
  function traverseArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        // Si el elemento es un arreglo, se llama recursivamente a la función para recorrerlo
        traverseArray(array[i]);
      } else {
        // Si el elemento no es un arreglo, se suma a la variable sum
        sum += array[i];
      }
    }
  }

  // Llamada inicial a la función para recorrer el arreglo principal
  traverseArray(arr);

  return sum;

  // otra forma: 
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       sum += mdArraySum(arr[i]);
//     } else {
//       sum += arr[i];
//     }
//   }
//   return sum;
}

module.exports = mdArraySum
