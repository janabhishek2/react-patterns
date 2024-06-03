import React, { useEffect, useState } from 'react';

// getData returns a promise; handle the accept/reject scenarios accordingly.

const useCustomHook = (getData, id) => {
    const [resource, setResource] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (getData) => {
        try {
            setLoading(true);
            let response = await getData(id);
            response = await response.json();
            setResource(response); 
        } catch(err) {
            setResource(null);
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        !resource && fetchData(getData)
    }, [getData, resource]);

    return {
        resource,
        loading
    }
};

export default (useCustomHook);
