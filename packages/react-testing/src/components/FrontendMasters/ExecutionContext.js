Object.prototype.myCreate = function(protoObject, options) {
    function Factory() {};
    Factory.prototype = protoObject;
    const newObj = new Factory;
    options && Object.defineProperties(newObj, options);
    return newObj;
}
const ans = Object.myCreate({ a: 1 }, {
    name: {
        value: "Abhishek",
    }
});

console.log(ans, Object.keys(ans));
