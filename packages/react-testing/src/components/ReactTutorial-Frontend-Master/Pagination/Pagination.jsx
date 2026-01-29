import React, { useState } from 'react';
import './Pagination.css';

const PAGE_SIZE = 10;

function Pagination({ data, renderRow, pageSize = PAGE_SIZE, paginationWrapperClass }) {

    const [currentPage, setCurrentPage] = useState(1);

    const startindex = (currentPage - 1) * pageSize;
    const endIndex = startindex + pageSize;

    const visibleData = data.slice(startindex, endIndex);

    const paginationClasses = `pagination ${paginationWrapperClass}`;


    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prevNext) => Math.min(prevNext + 1, Math.ceil(data.length / pageSize)));
    };

    return (
        <div className={paginationClasses}>
            <div className='pagination-content'>
                {
                    visibleData.map((d) => {
                       return (
                        <div key={d}>
                            {
                                renderRow(d)
                            }
                        </div>
                       )
                    })
                }
            </div>
            <div className='pagination-footer'>
                {/* prev */}
                <button onClick={handlePrevious}>Previous</button>
                {/* next */}
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Pagination
