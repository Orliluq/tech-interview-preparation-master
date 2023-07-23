// function HasBalanceBrackets(string) {
//   // Your code here:
//   const stack = [];
//   const simbolosApertura = ["[", "{", "("];
//   const simbolosCierre = ["]", "}", ")"];

//   for (let i = 0; i < string.length; i++) {
//     const character = string[i];

//     if (simbolosApertura.includes(character)) {
//       stack.push(character);
//     } else if (simbolosCierre.includes(character)) {
//       conversionApertura = simbolosApertura[simbolosCierre.indexOf(character)];

//       if (stack.length === 0 || stack.pop() !== conversionApertura) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

function HasBalanceBrackets(string) {
  // Your code here:
  const stack = [];

  const simbolos = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (simbolos[character]) {
      stack.push(character);
    } else if (simbolos[stack.pop()] !== character) {
      // { : }
      // ^
      return false;
    }
  }
  return !stack.length;
}

console.log(HasBalanceBrackets("{[]()}")); //(true)
console.log(HasBalanceBrackets("{[(])}")); //(false)
console.log(HasBalanceBrackets("}")); //(false)
console.log(HasBalanceBrackets("{[([{()[]{}}])]}")); //(true)
console.log(HasBalanceBrackets("{[(])}")); //(false)

module.exports = HasBalanceBrackets;