import React, { useState } from 'react'
import Input from './Input';

function Reconc() {
    const data = [
        {
            hint: "one"
        },
        {
            hint: "two"
        }
    ];
    const [toggle, setToggle] = useState(false);

    // if we not use key here then react will not knpw when it needs to re-mount the components, it will simply re-render.
    const inputs = data.map(( item,index ) =>(<Input hint={item.hint} key={index} />));
    
    // re-mount -> state is reset and component is remounted.
    toggle && inputs.reverse();

    return <>
        <label htmlFor='toggleCheck'>Click me</label>
        <input type="checkbox" name="toggleCheck" onChange={() => setToggle(!toggle)} />
        {
            inputs
        }
    </>;
}

export default Reconc