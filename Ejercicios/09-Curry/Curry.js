function curry(fn) {
  // Your code here:
  console.log(fn);
  const args = [];
  const argsNum = fn.length;

  console.log(argsNum);

  return function curried(arg) {
    console.log(arg);
    return args.push(arg) === argsNum ? fn(...args) : curried;
  };
}

const calcAllFour = (var1, var2, var3, var4) => {
  return var1 + var2 - var3 * var4;
};

let curriedDoSomething = curry(calcAllFour);

// const firstReturn = curriedDoSomething(1);
// console.log(typeof firstReturn); //('function')
// const secondReturn = firstReturn(2, 3);
// console.log(typeof secondReturn); //('function')
// const firstReturn = curriedDoSomething(1);
// const secondReturn = firstReturn(2);
// const thirdReturn = secondReturn(3);
// const fourthReturn = thirdReturn(4);
// console.log(thirdReturn);
// console.log(fourthReturn); //(-9)

module.exports = curry;
