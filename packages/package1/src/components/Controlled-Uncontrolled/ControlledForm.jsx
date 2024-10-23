import React, { useState } from 'react'

function ControlledForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    console.log(name, age);
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    return (
        <form>
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="text" value={age} onChange={handleAgeChange} />
            <button>Submit</button>
        </form>
    )
}

export default ControlledForm