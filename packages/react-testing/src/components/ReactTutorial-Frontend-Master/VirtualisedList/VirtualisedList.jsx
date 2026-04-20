import React from 'react'
import List from './List';

const data = Array.from({ length: 1000 }, (_, index) => index);

// scroll height = scrollTop + clientHeight + remaingingScroll.

function VirtualisedList() {
    
    return (
        <div>
            <List data={data} renderRow={Row}/>
        </div>
    )
}

function Row(args) {
    const data = args;
    return (<div className=''>
        {data}
    </div>)
}

export default VirtualisedList
