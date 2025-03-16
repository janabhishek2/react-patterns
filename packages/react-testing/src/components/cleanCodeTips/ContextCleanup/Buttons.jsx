import React, { useRef } from 'react'
import { useCounterDispatch } from './counter-context'

function Buttons() {
    const dispatch = useCounterDispatch();

    const buttonsRenderRef = useRef(0);
    console.log('render button', ++buttonsRenderRef.current);
    const handleIncrement = () => {
        dispatch({
            type: "increment"
        });
    };
    const handleDecrement = () => {
        dispatch({
            type: "decrement"
        });
    };

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Buttons