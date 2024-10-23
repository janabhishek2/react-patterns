import React, { useRef } from 'react';
import Input from './Input';

function ImperativeHandle() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef?.current?.myFocus();
    };

    return (
        <div>
            <Input ref={inputRef} />
            <button onClick={handleClick}>Update value</button>
        </div>
    )
}

export default ImperativeHandle;
