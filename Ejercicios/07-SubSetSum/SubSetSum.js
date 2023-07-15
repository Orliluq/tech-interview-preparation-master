// function subsetSum(nums, n) {
//   // Your code here:
//   let sumas = new Set([0]);

//   for (let num of nums) {
//     console.log(num);
//     const copiaSumas = [...sumas];

//     for (let suma of copiaSumas) {
//       const nuevaSuma = num + suma;
//       console.log(sumas);
//       if (nuevaSuma === n) return true;
//       if (nuevaSuma < n) sumas.add(nuevaSuma);
//     }
//   }
//   return false;
// }

function subSetSumRec(nums, target, index = 0) {
  if (target === 0) return true;
  if (target < 0) return false;
  if (index > nums.length) return false;

  // evaluo el target original con el resto de elementos
  const whenExcluded = subSetSumRec(nums, target, index + 1);
  // evaluo el resultado de la resta con el resto de los elementos
  const whenIncluded = subSetSumRec(nums, target - nums[index], index + 1);

  return whenExcluded || whenIncluded;
}

// memotizacion
const subSetSumRecMemo = (nums, target, index = 0, memo = {}) => {
  if (memo.hasOwnProperty(target)) return memo[target]; // resultados obtenidos
  if (target === 0) return true;
  if (target < 0) return false;
  if (index > nums.length) return false;
  const whenIncluded = subSetSumRec(nums, target - nums[index], index + 1);
  const whenExcluded = subSetSumRec(nums, target, index + 1);
  memo[target] = whenExcluded;
  memo[target - nums[index]] = whenIncluded;
  return whenExcluded || whenIncluded;
};

console.log(subSetSumRecMemo([1, 2, 10, 5, 3], 9)); //(true);

//console.log(subSetSum([1, 10, 5, 3], 19)); //(true);
// console.log(subsetSum([1, 10, 5, 3], 2)); //(false);
//console.log(subSetSum([1, 10, 5, 3], 10)); //(true);
module.exports = subsetSum;
