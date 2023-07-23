<<<<<<< HEAD
// function MaxValue(shares) {
//   let potencial = -Infinity;
//   for (let i = 0; i < shares.length; i++) {
//     for (let j = i + 1; j < shares.length; j++) {
//       if (potencial < shares[j] - shares[i]) {
//         potencial = shares[j] - shares[i];
//       }
//     }
//   }
//   return potencial;
// }

/// CON CHAT GPT

// Inicializamos dos variables: minPrice con el valor del primer elemento del arreglo shares, y maxProfit con 0. Estas variables almacenarán el mínimo valor encontrado hasta ahora y el máximo beneficio obtenido respectivamente.

// A continuación, recorremos el arreglo desde el segundo elemento hasta el último.

// En cada iteración, calculamos la diferencia entre el elemento actual y minPrice. Si esta diferencia es mayor que maxProfit, actualizamos maxProfit con este nuevo valor.

// También verificamos si el elemento actual es menor que minPrice. En tal caso, actualizamos minPrice con el valor del elemento actual.

// Al final del recorrido, la variable maxProfit contendrá el máximo beneficio que se puede obtener de los precios de las acciones.

// function MaxValue(shares) {
//   let minPrice = shares[0];
//   let maxProfit = -Infinity;

//   for (let i = 1; i < shares.length; i++) {
//     if (shares[i] - minPrice > maxProfit) maxProfit = shares[i] - minPrice;
//     if (shares[i] < minPrice) minPrice = shares[i];
//   }
//   return maxProfit;
// }

// CON CHATGPT

function MaxValue(shares) {
  let minPrice = shares[0];
  let maxProfit = -Infinity;

  for (let i = 1; i < shares.length; i++) {
    maxProfit = Math.max(maxProfit, shares[i] - minPrice);
    minPrice = Math.min(minPrice, shares[i]);
  }

  return maxProfit;
}

console.log(MaxValue([4, 3, 2, 5, 11])); //(9)
console.log(MaxValue([23, 7, 3, 4, 8, 6])); //(5)
console.log(MaxValue([11, 9, 7, 6, 1])); //(5)

module.exports = MaxValue;



// function MaxValue (shares) {
//   // Your code here:

//   function MaxValue(shares) {
//     let max = shares[0]; // Initialize the maximum with the first element
  
//     for (let i = 1; i < shares.length; i++) {
//       if (shares[i] > max) {
//         max = shares[i];
//       }
//     }
  
//     return max;
//   }
  
//   const shares = [4, 3, 2, 5, 11];
//   console.log(MaxValue(shares)); // Output: 11
  

// }

=======
function MaxValue (shares) {
  // Your code here:

  function MaxValue(shares) {
    let max = shares[0]; // Initialize the maximum with the first element
  
    for (let i = 1; i < shares.length; i++) {
      if (shares[i] > max) {
        max = shares[i];
      }
    }
  
    return max;
  }
  
  const shares = [4, 3, 2, 5, 11];
  console.log(MaxValue(shares)); // Output: 11
  

}

>>>>>>> e2f94fba9f42d1b15e8f4dda53d76383a0c9797c
// function MaxValue(shares) {
//   return Math.max(...shares);
// }

// const shares = [4, 3, 2, 5, 11];
// console.log(MaxValue(shares)); // Output: 11


// función MaxValue(acciones){
//   let min = acciones[0];
//   let maxDif = 0;
//   for(let i = 1; i < acciones.length; i++){
//      if(acciones[i] < min){
//         min = acciones[i];
//      }else if ((acciones[i] - min) > maxDif){
//         maxDif = acciones[i] - min;
//      }
//   }
//   return maxDif;
// }

// function MaxValue(acciones) {
//   let minPrice = acciones[0];
//   let maxProfit = 0;

//   for (let i = 1; i < acciones.length; i++) {
//     if (acciones[i] < minPrice) {
//       minPrice = acciones[i];
//     } else if (acciones[i] - minPrice > maxProfit) {
//       maxProfit = acciones[i] - minPrice;
//     }
//   }

//   return maxProfit;
// }

<<<<<<< HEAD
// module.exports = MaxValue
=======
module.exports = MaxValue
>>>>>>> e2f94fba9f42d1b15e8f4dda53d76383a0c9797c
