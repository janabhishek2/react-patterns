import React, { useRef, useState } from 'react'

function Test() {
    const [value, setValue] = useState(0);

    myHook();

    return (
        <div>Test</div>
    )
}

function myHook() {
    const [x, setx] = useState(0);
    console.log("my Hook");
}

export default Test