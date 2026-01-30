import React, { useState } from 'react';
import './Pagination.css';

const PAGE_SIZE = 5;

function Pagination({ data, renderRow, defaultPageSize = PAGE_SIZE, paginationWrapperClass }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(defaultPageSize);

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

    const handleLast = () => {
        setCurrentPage(Math.ceil((data.length) / pageSize));
    }

    const handleFirst = () => {
        setCurrentPage(1);
    };

    const handlePageSizeChange = (e) => {
        const newPageSize = parseInt(e.target.value, 10);
        setPageSize(newPageSize);
        setCurrentPage(1);
    };

    const prevAndNextNumbers = (currIndex, lastPage) => {
        const prev = (currIndex - 1) >= 1 ? (currIndex - 1) : null;
        const prevPrev = (currIndex - 2) >= 1 ? (currIndex - 2) : null;

        const next = (currIndex + 1) <= lastPage ? currIndex + 1: null;
        const nextNext = (currIndex + 2) <= lastPage ? currIndex + 2: null; 

        const handlePageChange = (newPage) => {
            return () => {
                setCurrentPage(newPage);
            }
        }
        const renderNumbers = () => {
            console.log(currIndex, prevPrev);
            return <div style={{
                display: "flex",
            }}>
                <div>...</div>
                {prevPrev && <button disabled={currIndex === prevPrev} onClick={handlePageChange(prevPrev)}>{prevPrev}</button>}
                {prev && <button disabled={currIndex === prev} onClick={handlePageChange(prev)}>{prev}</button>}

                {<button disabled={currIndex === currentPage}>{currIndex}</button>}

                {next && <button disabled={currIndex === next} onClick={handlePageChange(next)}>{next}</button>}
                {nextNext && <button disabled={currIndex === nextNext} onClick={handlePageChange(nextNext)}>{nextNext}</button>}
                <div>...</div>
            </div>
        }

        return renderNumbers();

    }

    const lastPageNumber = Math.ceil((data.length) / pageSize);

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

                {/* Select page size */}
                <label htmlFor='pageSize'>Page Size: </label>
                <select id="pageSize" onChange={handlePageSizeChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>

                {/* First */}
                <button onClick={handleFirst} disabled={currentPage === 1}>First</button>

                {
                    prevAndNextNumbers(currentPage, lastPageNumber)
                }

                {/* prev
                <button onClick={handlePrevious} disabled={currentPage === 1}>Previous Page</button>
                {/* next */}
                {/* <button onClick={handleNext} disabled={currentPage === Math.ceil(data.length / pageSize)}>Next Page</button> */}
              
                {/* Last */}
                <button onClick={handleLast} disabled={currentPage === Math.ceil(data.length / pageSize)}>Last</button>
            </div>
        </div>
    )
}

export default Pagination
