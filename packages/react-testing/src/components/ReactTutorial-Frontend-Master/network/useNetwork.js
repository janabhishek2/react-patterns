import React, { useEffect, useState } from 'react';

export const useGetNetworkCall = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const call = () => {
        setIsLoading(true);
        fetch("../dummy-data/products.json").then(res => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setIsLoading(false);
        })
        };
    
       !data && call();
    }, [])

    return {
        data, isLoading, error
    }
}