import React from 'react'
import './List.css';

function List({ data, renderRow }) {

    const handleScroll = () => {
        
    }

    return (
        <div onScroll={handleScroll} className='list-container'>
            {
                data.map((item) => {
                    if(renderRow) {
                        return renderRow(item)
                    }
                    return (
                        <div className='list-item'>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List
