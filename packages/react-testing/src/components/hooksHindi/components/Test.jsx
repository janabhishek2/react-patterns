import React, { useReducer } from 'react'

function Test() {
    const [value1, setValue1] = useMyState(3);
    const [value2, setValue2] = useMyState(5);

    const handleClick1 = () => {
        setValue1(value1 + 1);
    };
    const handleClick2 = () => {
        setValue2(value2 +1);
    }

    return (
        <>
            <div>
                {value1}
                <button onClick={handleClick1}>Click me</button>
            </div>
            <div>
                {value2}
                <button onClick={handleClick2}>Click me</button>
            </div>
        </>
    )
}

let states = [];
let index = 0;
let defaultValue;

const useMyState = (initialValue) => {
    let callId = index++;
    const [, forceUpdate] = useReducer(() => ({}));

    const renderer = () => {
        forceUpdate({});
    }

    const handleUpdate = function(newValue) {
        states[callId][0] = newValue;
        renderer();
    };

    if(states[callId]) {
        return states[callId];
    }

    const tuple = [initialValue, handleUpdate];
    states[callId] = tuple;
    return states[callId];
};

export default Test