import React, { useEffect, useRef, useState } from 'react';

export default function() {
    
    const ref = useRef(0);

    const [value, setValue] = useState("");

    const handleSubmit = () => {
        console.log("balab");
    };

    useEffect(() => {
        ref.current++;
    });

    console.log(ref.current);

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