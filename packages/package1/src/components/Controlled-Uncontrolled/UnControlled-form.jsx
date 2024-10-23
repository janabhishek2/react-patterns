import React, { useRef } from 'react';

function UnControlledForm() {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
    }

    const nameRef = useRef(null);
    const ageRef = useRef(null);

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" ref={nameRef}/>
            <input type="text" placeholder='Age' name="age" ref={ageRef} />
            <button type="submit" value="submit">Submit</button>
            </form>
            
        </div>
    );

}

export default UnControlledForm;
