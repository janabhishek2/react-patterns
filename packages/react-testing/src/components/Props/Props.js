import React from 'react'
import Child from './Child';

function Props() {

    const handleClick = () => {
        window?.childFn();
    }
    return (
        <div>
            <button onClick={handleClick}>Click me to trigger child fn</button>
            <Child/>
        </div>
    )
}

export default Props
