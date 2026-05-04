import React, { useEffect, useRef, useState } from 'react'
import './List.css';

const ROW_HEIGHT = 20;
const CLIENT_HEIGHT = 100;
const OVERSCAN = 5;

function List({ data, renderRow }) {

    const fixedRowHeight = `${ROW_HEIGHT}px`;
    const fixedClientHeight = `${CLIENT_HEIGHT}px`;

    const [scrollTop, setScrollTop] = useState(0);

    const startIndex = Math.max(Math.floor((scrollTop / ROW_HEIGHT)) - OVERSCAN, 0);
    const endIndex = Math.min(Math.floor((scrollTop + CLIENT_HEIGHT)/ROW_HEIGHT) + OVERSCAN, data.length);

    const handleScroll = (e) => {
        setScrollTop(e.target.scrollTop)
    }

    return (
        <div onScroll={handleScroll} style={{ height: fixedClientHeight}} className='list-container'>
           <div style={{ height: `${data.length * ROW_HEIGHT}px`}}>
            {
                 data.slice(startIndex, endIndex).map((item, index) => {
                    if(renderRow) {
                        return renderRow(item)
                    }
                    return (
                        <div key={index} style={{ height: fixedRowHeight, top: `${(startIndex+index) * ROW_HEIGHT}px` }} className='list-item'>
                            {item}
                        </div>
                    )
                })
            }
           </div>
        </div>
    )
}

export default List
