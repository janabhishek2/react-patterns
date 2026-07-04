import React, { useEffect, useRef, useState } from 'react'
import './inf.css';

// Using intersection observer

const fetchNextElements = (curr) => {
    return new Array(20).fill(0).map((_, index) => curr + index + 1);
}

function Inf2() {
 
    const [items, setItems] = useState(fetchNextElements(0));
    const loadingRef = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                const newElements = fetchNextElements(items.length);
                const curr = [...items];
                setItems([...curr, ...newElements]);
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection);

        if(loadingRef?.current) {
            observer.observe(loadingRef?.current);
        }

        return () => {
            // observer.unobserve(loadingRef.current);
            observer.disconnect();
        }
    }, [loadingRef?.current, items.length]);

    return (
        <div className='inf-wrapper'>
            {
                items.map((item) => {
                    return (<div className='inf-item'>
                            {item}
                        </div>)
                })
            }
            <div ref={loadingRef} />
        </div>
    )
}

export default Inf2
