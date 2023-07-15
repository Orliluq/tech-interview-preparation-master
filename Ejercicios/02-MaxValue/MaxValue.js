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

module.exports = MaxValue
