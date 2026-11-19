export const getDebouncedFunction = (func, time) => {
    let timeoutId = null;
    return function(...args) {
        timeoutId && clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
            clearTimeout(timeoutId);
            timeoutId = null;
        }, time);
    }
}

const Items = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Pineapple",
  "Watermelon",
  "Papaya",
  "Guava",
  "Strawberry",
  "Blueberry",
  "Kiwi",
  "Peach",
  "Pear",
  "Cherry",
  "Plum",
  "Pomegranate",
  "Litchi",
  "Dragon Fruit",
  "Coconut"
];

export const getItems = async (queryparam = "") => {
    console.log("call");
    return  new Promise((resolve) => {
        setTimeout(() => {
            let filteredItems = queryparam === "" ? Items: Items.filter((item) => item.toLocaleLowerCase().includes(queryparam.toLocaleLowerCase()))
            resolve(filteredItems);
        }, 1000);
    })
}