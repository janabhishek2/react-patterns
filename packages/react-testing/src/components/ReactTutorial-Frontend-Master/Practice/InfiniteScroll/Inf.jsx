import React, { useRef, useState } from 'react';
import './inf.css';

const fetchNextElements = (curr) => {
    return new Array(20).fill(0).map((_, index) => curr + index + 1);
}

function Inf() {

    const [items, setItems] = useState(fetchNextElements(0));
    const wrapperRef = useRef(null);
    const handleScroll = () => {

        // how do we know ? scrollHeight - (scrollTop + clientHeight) < 10
        
        const wrapper = wrapperRef.current;
        if((wrapper.scrollHeight - (wrapper.clientHeight + wrapper.scrollTop)) < 10) {
                // if we are at bottom, update items
                let currItems = [...items];
                const newItems = fetchNextElements(items.length);
                console.log(newItems);
                setItems([...currItems, ...newItems]);
        }
    }
    return (
        <div className='inf-wrapper' onScroll={handleScroll} ref={wrapperRef}>
            {
                items.map((item) => {
                    return (<div className='inf-item'>
                            {item}
                        </div>)
                })
            }
        </div>
    )
}

export default Inf
