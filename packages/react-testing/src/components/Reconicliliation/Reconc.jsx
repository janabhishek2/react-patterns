import React, { useState } from 'react'
import Input from './Input';

function Reconc() {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            Reconciliation example
            <br/>
            <label htmlFor='checkBox'>Check me! </label>
            <input type="checkbox" checked={toggle} name="checkBox" onChange={() => setToggle(toggle => !toggle)}/>

            <br/>

            {/* Input is not re-mounted when toggle is changed */}
            {
                toggle ? (<Input hint={"hint1"} />) : (<Input hint={"hint2"} />)
            }
        </div>
    )
}

export default Reconc