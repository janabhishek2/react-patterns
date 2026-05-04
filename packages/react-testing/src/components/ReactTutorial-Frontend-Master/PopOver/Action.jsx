import React from 'react'
import { usePopOverContext } from './popoverContext'

function Action({ label, node }) {

    const { handleToggle } = usePopOverContext();

    if(label) {
        return <button onClick={handleToggle}>{label}</button>
    } else {
        return <button onClick={handleToggle}>{node}</button>
    }
}

export default Action
