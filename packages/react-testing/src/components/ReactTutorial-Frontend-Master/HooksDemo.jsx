import React, { useReducer } from 'react';

function HooksDemo() {
    const [value, setValue] = useState2(33);

    const handlePlus = () => {
        setValue(value+1);
    }
    const handleMinus = () => {
        setValue(value - 1);
    }
    return <div>
        <button onClick={handlePlus}>+</button>
        {value}
        <button onClick={handleMinus}>-</button>
    </div>
}

function useState2(initialValue) {
    const reducer = (prev, next) => {
        return next;
    }
    let [value, setValue] = useReducer(reducer, initialValue);
    return [value, setValue];
    
}

export default HooksDemo;
