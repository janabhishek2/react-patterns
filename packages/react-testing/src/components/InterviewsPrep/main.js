const curry = (func) => {
  return function f1(...args) {
    if(args.length >= func.length) {
      // if num of args of calling function matches function provided to curry
      return func(...args);
    } else {
      // return partially applied function
      return function f2(...moreArgs) {
        let newArgs = [...args, ...moreArgs];
        // return f1 recursively
        return f1(...newArgs);
      }
    }
  }
};

const curriedSum = curry((a,b,c) => a+b+c);

const sum = curriedSum(1,2,3,4,5,6);
console.log(sum);

// curried(a1,a2,a3) = curry((a,b,c) => a+b+c);