import React, { useRef } from 'react'
import { useCounterState } from './counter-context'

function Display() {
    // const displayRenderCount = useRef(0);
    const { counter } = useCounterState();
    // console.log('render display', displayRenderCount.current++);
    return (
        <div>{counter}</div>
    )
}

export default Display