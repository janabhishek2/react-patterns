import React, { useEffect, useRef, useState } from 'react'

function Refs() {
    
    const buttonRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(() => {
       
    }, [nameRef?.current]);

    const handleClick = () => {
        nameRef.current.value = 'abcd';
    };

    return (
        <>
            <button ref={buttonRef} onClick={handleClick}>Click me</button>
            <br />
            <br />
            <input ref={nameRef} type="text" />
        </>
    )
}

export default Refs