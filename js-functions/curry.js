// Version that allows >1 args in a curried call.
// e.g., mul = (a, b, c) => a * b * c;
// curriedMul = curry(mul)
// mulThreeByTwo = curriedMul(3, 2); // allowed
// console.log(mulThreeByTwo(5)); // 30
export default function curry(func) {
  return function c(...args) {
    if (args.length < func.length) {
      return c.bind(this, ...args);
    } else {
      return func.call(this, ...args);
    }
  }
}

// Version that tries to stay true to single arg per call, but fails because
// JavaScript allows calling a function while ignoring all its expected arguments.
// So calls like the following would fail with the following function:
// mulThree = (a, b, c) => a * b * c;
// curried = curry(mulThree);
// curried()(4)()(3)()(2);
// curried()()()()(4)(2)(3);
// But the function works correctly if empty calls are not made.
function curryOne(func) {
  if (func.length === 0) {
    return func;
  }
  return function c(arg) {
    // let collectedArgs = 0;
    if (arguments.length < func.length) {
      return c.bind(this, arg);
      // if (collectedArgs === arguments.length) {
      //   return c;
      // } else {
      //   collectedArgs++;
      //   return c.bind(this, arg);
      // }
    } else {
      return func.call(this, ...arguments);
    }
  };
}
