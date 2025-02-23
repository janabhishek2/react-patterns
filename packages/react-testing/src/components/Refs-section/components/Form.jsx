import React, { useState } from 'react';

export default function() {
    
    const [value, setValue] = useState("");

    console.log('render');
    const handleSubmit = () => {
        console.log("balab");
    };

    const handleChange = (e) => {
        setValue(e.target.value)
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