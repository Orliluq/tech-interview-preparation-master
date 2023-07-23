// function intersection(arr1, arr2) {
//   const repetidos = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         repetidos.push(arr1[i]);
//         break;
//       }
//     }
//   }
//   return repetidos;
// }

// function intersection(arr1, arr2) {
//   const repetidos = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] === arr2[j]) {
//       repetidos.push(arr1[i]);
//       i++;
//       j++;
//     } else if (arr1[i] < arr2[j]) {
//       i++;
//     } else {
//       j++;
//     }
//   }
//   return repetidos;
// }

// function intersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const repetidos = [];

//   for (let num of arr2) {
//     if (set1.has(num)) {
//       repetidos.push(num);
//       set1.delete(num);
//     }
//   }

//   return repetidos;
// }

function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter((num) => set1.has(num));
}

//   O(n)
console.log(
  intersection([15, 3, 3, 5, 7, 7, , 10, 10], [22, 2, 3, 6, 8, 10, 20])
); //([3, 10])
//                        ^                 ^
module.exports = intersection;
