import React, { useState, useEffect } from 'react'

function DataSourceLocalStorage({ children, getDataFromLocalStorage, resourceName}) {

    const [data, setData] = useState('');

    useEffect(() => {
       setData(getDataFromLocalStorage());
    }, [getDataFromLocalStorage]);

    return React.Children.map(children, (child) => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName]: data })
        }
        return child;
    });

}

export default DataSourceLocalStorage;
