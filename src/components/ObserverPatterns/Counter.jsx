import React, { useEffect, useState } from 'react';
import { emitter } from './Observer';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleIncrement = () => {
            setCount(count => count+1);
        }
        const handleDecrement = () => {
            setCount(count => count - 1);
        };

        emitter.on("inc", handleIncrement);
        emitter.on("dec", handleDecrement);

        return () => {
            emitter.off("inc", handleIncrement);
            emitter.off("dec", handleDecrement);
        }
    }, []);

    return (
        <div>Count: #{count}</div>
    )
}

export default Counter