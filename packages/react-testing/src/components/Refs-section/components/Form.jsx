import React, { useRef, useState } from 'react';

export default function() {
    
    const ref = useRef("");

    const [test, setTest] = useState(false);

    const handleSubmit = () => {
        console.log(ref.current);
        console.log("balab");
    };

    const handleChange = (e) => {
        ref.current = e.target.value;
    };

    // length will be updated only when component will re-render due to any state change.
    const length = ref.current?.length ?? 0;

    return (
        <>
            <label htmlFor="name">
                Name: 
            </label>
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            <div/>
            <button onClick={() => setTest(!test)}>update state</button>
            <span>Length is: {length}</span>
        </>
        )
}