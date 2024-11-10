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

let items = [
  {
    id: 1,
    name: "Abhishek"
  },
  {
    id: 2,
    name: "George"
  },
  {
    id: 3,
    name: "Styka"
  }
];

const curriedMap = curry((fn, items) => {
  return items.map(fn);
});

// curry the map function to get all ids in an array ?

let getIdsFunction = item => item?.id;
const getIds = curriedMap(getIdsFunction);

const ids = getIds(items);
console.log(ids);
