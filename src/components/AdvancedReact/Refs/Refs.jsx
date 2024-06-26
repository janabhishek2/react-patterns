import React, { useCallback, useEffect, useRef, useState } from 'react'

function Refs() {
    
    const [showInput, setShowInput] = useState(true);
    const inputRef = useCallback((element) => {
        if(element) {
            element.focus();
        }
    });

    const toggleShow = () => {
        setShowInput(!showInput);
    }
    return (
        <>
            <button onClick={toggleShow}>Toggle !</button>
            {
                showInput && <div>
                <label htmlFor='name'>Name: </label>
                <input id="name" type="text" ref={inputRef} />
                </div>
            }
        </>
    )
}

export default Refs