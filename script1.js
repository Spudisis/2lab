const curry = () => {
  let i = -1;
  const curried = (...args) => {
    if (i === args.length) {
      return args.reduce((acc, b) => {
        if (typeof b !== "number") {
          return "Not a Number";
        }
        return acc + b;
      }, 0);
    }
    i = args.length;
    return (...args2) => curried(...args, ...args2);
  };

  return curried();
};

const a = curry();

const b = a(1)(14)(6)(1)();

console.log(b);

// const cur = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(cur(1)(2)(3));
