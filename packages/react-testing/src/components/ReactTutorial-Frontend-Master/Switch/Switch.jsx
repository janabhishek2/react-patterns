import React, { useState } from 'react';
import './switch.css';

function Switch() {
    const [isOn, setIsOn] = useState(false);

    const onToggle = (e) => {
        // e.preventDefault();
        setIsOn((prev) => !prev);
    }

    console.log(isOn);
    return (
        <div className='switch' >
            <label className='switch-wrapper'>
                <input aria-checked={isOn} role="switch" className='' type="checkbox" checked={isOn} onChange={onToggle}/>
                <div className='slider'></div>
                <div className='switch-label'>Toggle Switch</div>
            </label>
        </div>
    )
}

export default Switch
