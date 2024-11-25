// shuffle an array

const shuffle = items => items.map(item => ({
    value: item,
    sort: Math.random()
})).sort((item1, item2) => item1.sort - item2.sort).map(item => item.value);

const arr = [1, 2, 3, 4];

console.log(shuffle(arr));
