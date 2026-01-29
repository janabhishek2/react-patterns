import React from 'react'
import Pagination from './Pagination';

function PaginationWrapper() {
    const data = Array.from({length: 100}, (_, index) => (index+1));
    return (
        <Pagination data={data} renderRow={(item) => {
            return <div>Hello from app: {item}</div>
        }}/>
    )
}

export default PaginationWrapper
