import React, { useEffect, useState } from 'react';

function GenericDataLoader({ children, resourceUrl, resourceName }) {
    
    const [resource, setResource] = useState({});

    const fetchResource = async () => {
        const data = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: 'Abhishek',
                    age: 24,
                    books: ['react', 'react-dom', 'webpack']
                });
            }, 2000);
        });
        setResource(data);
    }
    useEffect(() => {
        resourceUrl !== '' && fetchResource(); 
    }, [resourceUrl]);

    return (
        React.Children.map(children, (child) => {
            if(React.isValidElement(child)) {
                return React.cloneElement(child, {
                    [resourceName]: resource
                });
            } else {
                return child;
            }
        })
    )
}

export default GenericDataLoader;
