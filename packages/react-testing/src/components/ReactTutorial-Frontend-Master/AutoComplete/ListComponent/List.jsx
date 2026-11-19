import React from 'react'
import '../autoComplete.css';

function List({ handleSelect, options, selectedOption }) {

    const handleOptionSelect = (option) => {
        return () => {
            handleSelect(option);
        }
    }

    return (
       <ul className='listWrapper'>
            {
                options.map((option, key) => {
                    let listItemClassName = (selectedOption ?? "").toLowerCase() === option.toLowerCase() ? "listItem selected": "listItem";

                    return (
                        <li className={listItemClassName} key={key} style={{ }} onClick={handleOptionSelect(option)}>
                        {option}
                    </li>
                    )
                })
            }
       </ul>
    )
}

export default List
