import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function LayoutEffect() {
    const [top, setTop] = useState(0);
    const [show, setShow] = useState(false);

    const buttonRef = useRef(null);

    console.log(top);
    const handleClick = () => {
        setShow(!show);
    };
    
    const now = performance.now();

    while(now > performance.now() - 300) {
        null;
    }
    useLayoutEffect(() => {
        if(!buttonRef.current || !show) setTop(0);
        else {
            const { bottom } = buttonRef.current.getBoundingClientRect();
            setTop(bottom + 30);
        }
    }, [show]);

    return (<>
        <button ref={buttonRef} onClick={handleClick}>Click</button>
        {show && <div style={{
            border: "1px solid black",
            position: "fixed",
            padding: '20px',
            top: top
        }}>
            tooltip data
        </div>}
    </>)
}

export default LayoutEffect;
