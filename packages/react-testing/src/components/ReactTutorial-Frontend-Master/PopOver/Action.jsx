import React from 'react'
import { usePopOverContext } from './popoverContext'
import './popover.css';

function Action({ label, node }) {

    const { handleToggle } = usePopOverContext();

    if(label) {
        return <button className='action' onClick={handleToggle}>{label}</button>
    } else {
        return <button className='action' onClick={handleToggle}>{node}</button>
    }
}

export default Action
