function BinaryToDecimal(binary) {
  let decimal = 0;
  const length = binary.length;

  for (let i = 0; i < length; i++) {
    const power = length - 1 - i;
    const digit = parseInt(binary[i]);

    decimal += digit * Math.pow(2, power);
  }

  return decimal;
}

console.log(BinaryToDecimal('101')); // Output: 5
console.log(BinaryToDecimal('1101')); // Output: 13


module.exports = BinaryToDecimal;

