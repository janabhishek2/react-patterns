import React, { useState } from 'react'

function HooksDemo() {
    const { counters, update } = useState2();

    const handleIncrement1 = () => {
        update({ counter1: counters.counter1 + 1 })
    };
    const handleDecrement1 = () => {
        update({ counter1: counters.counter1 - 1 })
    };
    const handleIncrement2 = () => {
        update({ counter2: counters.counter2 + 1 })
    };
    const handleDecrement2 = () => {
        update({ counter2: counters.counter2 - 1 })
    };

    return (<div>
        <button onClick={handleDecrement1}>-</button>
        {counters.counter1}
        <button onClick={handleIncrement1}>+</button>

        <br/>

        <button onClick={handleDecrement2}>-</button>
        {counters.counter2}
        <button onClick={handleIncrement2}>+</button>
    </div>)
}

function useState2() {
    const [counters, setCounters] =  useState({ counter1: 0, counter2: 3});
    const update = (newCounterObj) => {
        setCounters({
            ...counters,
            ...newCounterObj
        });
    }
    return {
        counters,
        update
    }
}


export default HooksDemo