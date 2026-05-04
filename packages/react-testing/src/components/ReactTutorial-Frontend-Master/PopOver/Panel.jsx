import React from 'react'
import { usePopOverContext } from './popoverContext'

function Panel({ children }) {

    const { isOpen } = usePopOverContext();

    if(!isOpen) return null;

    return (
        <div>
            {
                children
            }
        </div>
    )
}

export default Panel
