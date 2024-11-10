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

let mapper = (item) => item.id;
const items = [
  {
    id: 1,
    name: "ahe"
  },
  {
    id: 2,
    name: "nf"
  }
];
const getIds = Array.prototype.map.bind(items, mapper);

console.log(getIds());
