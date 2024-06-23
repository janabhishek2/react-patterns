import React, { useCallback, useEffect, useRef, useState } from 'react'
import System from './System';

function Refs() {
    
    const [showInput, setShowInput] = useState(true);
    const inputRef = useRef(null);

    const func = useCallback(() => {
        console.log("bye!");
    }, []);

    useEffect(() => {
        // inputRef.current.focus();
    }, []);

    const toggleShow = () => {
        setShowInput(!showInput);
    }
    return (
        <>
            <button onClick={toggleShow}>Toggle !</button>
            <System func={func} />
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