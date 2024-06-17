import React, { useState } from 'react'
import Counter from './Counter';

function Keys() {

    const [toggle, setToggle] = useState(false);
    const [val, setVal] = useState("");

    const onToggle = () => {
        setToggle(toggle => !toggle);
    }

    const handleInputChange = (e) => {
        setVal(e.target.value);
    }
    return (<>
        {
            toggle ? (
                <div>
                    Shoes counter:
                </div>
            ) : (<div>
                XYZ counter:
            </div>)
        }
        {/* for inputs not bound to any react state; it will be re-mounted if key changes; if we bind it to react state then it does not change. */}
        <input type="text" key={toggle ? 'a': 'b'}/>
        <button onClick={onToggle}>Toggle</button>
    </>);
}

export default Keys;
