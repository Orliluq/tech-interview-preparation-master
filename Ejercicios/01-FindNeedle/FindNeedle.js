function FindNeedle (haystack, needle) {
  // Your code here:
  for (let i = 0; i < haystack.length; i++) {
    /// OPCION A
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) break;

      if (j === needle.length - 1) return i;
    }

    //OPCION B
    // if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1;
}

// O(n*n)

console.log(FindNeedle("react-redux", "redux")); //(6)
console.log(FindNeedle("pinky", "puntual")); //(-1)
console.log(FindNeedle("rereredux", "reredux")); //(2)

module.exports = FindNeedle;
