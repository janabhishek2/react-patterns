import React from 'react'
import { usePopOverContext } from './popoverContext'
import './popover.css';

function Panel({ children }) {

    const { isOpen } = usePopOverContext();

    if(!isOpen) return null;

    return (
        <div className='panel'>
            {
                children
            }
        </div>
    )
}

export default Panel
