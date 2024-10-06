import React, { useState } from 'react';

export default function Test() {
    const {
        count: counter,
        increment,
        decrement
    } = useCounter(0);

    return (
    <>
        <button onClick={decrement}>-</button>
        {counter}
        <button onClick={increment}>+</button>
    </>);
};

const useCounter = (initialCount) => {

    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    }
    return {
        count, increment, decrement
    }
}
