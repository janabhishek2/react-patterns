import React, { useEffect, useState } from 'react'

function DataSource({ children, resourceName, getData = () => {} }) {
  
    const [data, setData] = useState({});

    const fetchAndSetData = async () => {
        const res = await getData();
        setData(res);
    }
    useEffect(() => {
        fetchAndSetData();
    }, [getData]);

    return React.Children.map(children, (child) => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName]: data });
        } else return child;
    });
}

export default DataSource;
