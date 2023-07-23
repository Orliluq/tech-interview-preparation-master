function longestIncreasingSubsequence(nums) {
  const dp = Array(nums.length).fill(1); // Inicializar un arreglo de longitud igual a nums con valores 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp); // Devolver el máximo valor en el arreglo dp
}

console.log(longestIncreasingSubsequence([3, 10, 4, 5])); // Output: 3
console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6])); // Output: 3
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80])); // Output: 6
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28])); // Output: 9


module.exports = longestIncreasingSubsequence;
