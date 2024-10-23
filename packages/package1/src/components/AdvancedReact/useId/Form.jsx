import React, { useId } from 'react'

function Form() {

    const id = useId();
    return (
        <div>
            <label htmlFor={id}>Name</label>
            <input id={id} type="text"/>
        </div>
    )
}

export default Form