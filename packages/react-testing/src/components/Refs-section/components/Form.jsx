import React, { useEffect, useRef, useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';

export default function() {
    
    const [value, setValue] = useState("");

    const prevValue = usePrevious(value);
    console.log(prevValue, value);
    const handleSubmit = () => {
        console.log("balab");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    // length will be updated only when component will re-render due to any state change.
    const length = value?.length ?? 0;

    return (
        <>
            <label htmlFor="name">
                Name: 
            </label>
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            <span>Length is: {length}</span>
        </>
        )
}