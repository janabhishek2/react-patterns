import React, { useState } from 'react'

function Counter() {
    const [ count , setCount ] = useState(0);
    const onIncrement = () => setCount(count+1);
    const onDecrement = () => setCount(count-1);

    return (
        <div><button onClick={onIncrement}>+</button>#{count}<button onClick={onDecrement}>_</button></div>
    )
}

export default Counter