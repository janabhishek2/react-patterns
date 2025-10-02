const states = [];
let hookIndex = 0;

const useState = (initialValue) => {
    if(states[hookIndex] ){
        return states[hookIndex++]
    }
    let value = initialValue;
    const updateValue = (newVal) => {
        tuple[0] = newVal
    }

    const tuple = [value, updateValue];
    states[hookIndex++] = tuple;
    return tuple;
}

function Person() {
    const [s1, setS1] = useState(3);
}

Person();
Person();

console.log(states);
