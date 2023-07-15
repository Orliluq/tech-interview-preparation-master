function DecimalToBinary(num) {
  let binary = '';

  while (num !== 0) {
    const remainder = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
  }

  return binary;
}

console.log(DecimalToBinary(5)); // Output: '101'
console.log(DecimalToBinary(13)); // Output: '1101'


module.exports = DecimalToBinary;

