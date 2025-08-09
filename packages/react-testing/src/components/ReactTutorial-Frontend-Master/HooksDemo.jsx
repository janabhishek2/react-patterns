import React, { useReducer } from 'react';

function HooksDemo() {
    const [value, setValue] = useState2(33);
    const [value2, setValue2] = useState2(9);

    const handlePlus = () => {
        setValue(value+1);
    }
    const handleMinus = () => {
        setValue(value - 1);
    }

    const handlePlus2 = () => {
        setValue2(value2+1);
    }
    const handleMinus2 = () => {
        setValue2(value2 - 1);
    }
    return <div>
        <button onClick={handlePlus}>+</button>
        {value}
        <button onClick={handleMinus}>-</button>
        <br/>
        <button onClick={handlePlus2}>+</button>
        {value2}
        <button onClick={handleMinus2}>-</button>
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
