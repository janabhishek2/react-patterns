import React, { useRef, useState } from 'react';

export default function() {
    
    const ref = useRef("");

    console.log('render');

    const handleSubmit = () => {
        console.log(ref.current);
        console.log("balab");
    };

    const handleChange = (e) => {
        ref.current = e.target.value;
    };

    return (
        <>
            <label for="name">
                Name: 
            </label>
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </>
        )
}