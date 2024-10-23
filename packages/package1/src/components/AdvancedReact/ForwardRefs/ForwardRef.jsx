import React, { useEffect, useRef } from 'react'
import Input from './Input';

function ForwardRef() {
    const inputRef = useRef(null);

    const handleClick=() => {
        console.log(inputRef.current.value);
    };

    return (
        <div>
            <h2>Forwarding refs...</h2>
            <Input type="text" ref={inputRef} />

            <button onClick={handleClick}>Show ref value</button>
        </div>
    )
}

export default ForwardRef;
