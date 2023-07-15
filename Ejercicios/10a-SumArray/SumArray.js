function SumArray (arr, n) {
  // Your code here:

  // let left = 0; // índice izquierdo
  // let right = arr.length - 1; // índice derecho

  // while (left < right) {
  //   const sum = arr[left] + arr[right]; // suma de los dos números

  //   if (sum === n) {
  //     return true; // se encontró una combinación que suma el número dado
  //   } else if (sum < n) {
  //     left++; // avanzar el índice izquierdo si la suma es menor
  //   } else {
  //     right--; // retroceder el índice derecho si la suma es mayor
  //   }
  // }

  // return false; // no se encontró una combinación que sume el número dado

 // otra forma:
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] + arr[j] === n) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // }
  
  // otra forma:
    const seen = {};
    for (let i = 0; i < arr.length; i++) {
      if (seen[n - arr[i]]) {
        return true;
      }
      seen[arr[i]] = true;
    }
    return false;
  }
  



module.exports = SumArray
