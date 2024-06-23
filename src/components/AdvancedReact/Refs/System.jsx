import React from 'react'

function System(props) {
    console.log('render system');
    return (
        <div>System</div>
    )
}

export default React.memo(System);