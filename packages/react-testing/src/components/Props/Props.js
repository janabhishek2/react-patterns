import React, { useState } from 'react'
import Child from './Child';

function Props() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    }
    return (
        <div>
            <h3>Count is: {count}</h3>
            <button onClick={handleClick}>Click me to trigger child fn</button>
            <Child />
        </div>
    )
}

export default Props
