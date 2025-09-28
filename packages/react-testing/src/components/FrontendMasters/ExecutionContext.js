const wm = new WeakMap();

let obj = {
    name: "Abhishek"
};

wm.set(obj, 1);

obj = null;

// WeakMap will not have obj inside it.
console.log(wm);