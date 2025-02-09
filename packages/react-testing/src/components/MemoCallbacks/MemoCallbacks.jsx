import React, { useState, useCallback, useMemo } from 'react'
import Comp1 from './Comp1';

function MemoCallbacks() {

    const submit = useCallback(() => {
        console.log("Function run");
    }, []);
    const data = useMemo(() => ({}), []);
    const [count, setCount] = useState(0);

    return (
        <>
            <input type="text" disabled value={count} />
            <button onClick={() => setCount(count+1)}> Click Me!! </button>
            <Comp1 submit={submit} data={data}/>
        </>
    );

}

export default MemoCallbacks