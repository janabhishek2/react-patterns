import React, { useEffect } from 'react'

function Comp1({ submit, data }) {

    // useEffect(() => {
    //     submit();
    // }, [submit]);

    console.log('render', data);

    return (
        <div>Comp1</div>
    )
}

export default React.memo(Comp1);