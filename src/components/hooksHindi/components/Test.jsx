import React, { useState } from 'react';

const Test = () => {
    const [counters, setCounters] = useCounters({
        value1: 2,
        value2: 3
    });

    console.log(counters);

    const handleIncrement1 = () => {
        setCounters({
            value1: counters.value1 + 1
        });
    };

    const handleDecrement1 =() => {
        setCounters({
            value1: counters.value1 - 1
        });
    }

    const handleIncrement2 = () => {
        setCounters({
            value2: counters.value2 + 1
        });
    };

    const handleDecrement2 = () => {
        setCounters({
            value2: counters.value2 - 1
        });
    };

    return(
        <>
            <div>
                <button onClick={handleDecrement1}>-</button>
                {
                    counters.value1
                }
                <button onClick={handleIncrement1}>+</button>
            </div>
            <br/>
            <div>
                <button onClick={handleDecrement2}>-</button>
                    {
                        counters.value2
                    }
                <button onClick={handleIncrement2}>+</button>
            </div>
        </>
    )
};

const useCounters = (initialState = {}) => {
    const [counters, setCounters] = useState(initialState);

    const updateCounters = (value) => {
        setCounters({
            ...counters,
            ...value
        });
    };

    return [counters, updateCounters];
}

export default Test;
