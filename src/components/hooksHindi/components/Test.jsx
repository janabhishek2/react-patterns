import React, { useEffect, useState } from 'react';

const Test = () => {
    const {
        data = [], loading
    } = useNetwork("https://dummyjson.com/todos");

    const [count, setCount] = useState(0);
    if(loading) {
        return <h1>Loading!!</h1>
    }
    return (
       <ul>
        {
            (data || []).map(item => {
                return <li onClick={() => setCount(count + 1)}>{item.todo}</li>
            })
        }
       </ul>
    )
};

const useNetwork = (url = '') => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try{
            setLoading(true);
            const response = await fetch(url);
            if(!response.ok) throw new Error('api call error');
            const data = await response?.json();
            setData(data?.todos);
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    console.log('run');
    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        loading
    };
}


export default Test;
