import React, { useEffect, useRef } from 'react'

function Long() {

    const isApiCalledRef = useRef(false);

    useEffect(() => {
        const longPoll = () => {
            isApiCalledRef.current = true;
            fetch("http://localhost:4000/long-polling").then((res) => res.json()).then(data => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
        }
        isApiCalledRef.current === false && longPoll();
    }, []);

    return (
        <div>Long</div>
    )
}

export default Long
