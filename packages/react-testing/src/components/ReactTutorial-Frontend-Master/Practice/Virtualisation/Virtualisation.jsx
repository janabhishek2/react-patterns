import React, { useEffect, useRef, useState } from 'react'

import './virtualisation.css';

let items = Array.from({ length: 1000 }, (_,i ) => i);
const ITEM_HEIGHT = 30;
const OVERSCAN_COUNT = 3;

function InfiniteScroll() {

    const wrapperRef = useRef(null);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);

    useEffect(() => {
        if(wrapperRef.current) {
            const scrollTop = 0;
            const clientHeight = wrapperRef.current.clientHeight;
            let startIndex = Math.floor((scrollTop / ITEM_HEIGHT));
            let endIndex = Math.min(Math.floor((scrollTop + clientHeight) / ITEM_HEIGHT) + OVERSCAN_COUNT, items.length);
            setStartIndex(startIndex)
            setEndIndex(endIndex);
        }
    }, []);

    const handleScroll = () => {
        const scrollTop = wrapperRef.current.scrollTop;
        const clientHeight = wrapperRef.current.clientHeight;
        let startIndex = Math.floor((scrollTop / ITEM_HEIGHT));
        let endIndex = Math.min(Math.floor((scrollTop + clientHeight) / ITEM_HEIGHT) + OVERSCAN_COUNT, items.length);
        setStartIndex(startIndex)
        setEndIndex(endIndex);
    }

    return (
        <div className='scroll-wrapper' style={{ height: `${items * ITEM_HEIGHT}px` }} ref={wrapperRef} onScroll={handleScroll}>
            {/* <div style={{ height: startIndex * ITEM_HEIGHT }} /> */}
            {
                items.slice(startIndex, endIndex).map((item, index) => {
                    return (<div key={item} style={{ top: `${(startIndex + index) * ITEM_HEIGHT}px`, width: "100%" }} className='scroll-item'>
                            {item}
                    </div>)
                })
            }
            {/* <div style={{ height: (items.length - endIndex) * ITEM_HEIGHT }} /> */}
        </div>
    )
}

export default InfiniteScroll
