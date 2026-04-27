import React, { useState } from 'react'
import './List1.css';

const ROW_HEIGHT = 20;
const LIST_HEIGHT = 120;

const fixed_row_height = `${ROW_HEIGHT}px`;
const fixed_list_height = `${LIST_HEIGHT}px`;

function List1(props) {
    const { data } = props;

    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (e) => {
        setScrollTop(e.target.scrollTop);
    }

    const startIndex = Math.max(Math.floor(scrollTop / ROW_HEIGHT), 0);
    const endIndex = Math.min(Math.floor((scrollTop + LIST_HEIGHT)/ROW_HEIGHT ), data.length)

    console.log(startIndex, endIndex);
    return (
        <div className='list-container' style={{ height: fixed_list_height }} onScroll={handleScroll}>
            <div style={{ height: `${data.length * ROW_HEIGHT}px`}}>
               {
                data.slice(startIndex, endIndex).map((item, index) => {
                    return (<div key={index} className='list-item' style={{ height: fixed_row_height, top: `${((startIndex + index) * ROW_HEIGHT)}px` }}>
                        {
                            item
                        }
                    </div>)
                })
               }
            </div>
        </div>
    )
}

export default List1;
