import React, { useEffect, useRef, useState } from 'react'
import './toggle.css';

function Toggle({ isOn, onToggle }) {

    const handleChange = (e) => {
        const checked = e.target.checked;
        onToggle(checked);
    } 
    return (
        <label className='switch'>
                <input type="checkbox" id="myCheckbox" role="switch" aria-checked={isOn} onChange={handleChange} />
                <span className='switch-toggle' />
                <span className='switch-label'>Do you consent ?</span>
        </label>
    )
}

export default function ToggleWrapper() {
    const [isOn, setIsOn] = useState(false);
    const onToggle = () => {
        setIsOn((prev) => !prev);
    }

    return <Toggle isOn={isOn} onToggle={onToggle} />
}
