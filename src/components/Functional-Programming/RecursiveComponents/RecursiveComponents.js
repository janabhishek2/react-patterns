import React from 'react';

const isObject = data => typeof data == 'object' && data !== null;

function RecursiveComponents({ data }) {

    if(!isObject(data)) {
        return <li>{data}</li>
    }
    const pairs = Object.entries(data);
    console.log(pairs);
    return (
        <ul>
        {
            pairs.map(([key, value]) => {
                return (  
                    <li>
                        {key}
                        <ul>
                        <RecursiveComponents data={value} ></RecursiveComponents>
                        </ul>
                        
                        
                    </li>
                );
            })
        }
        </ul>
    );
}

export default RecursiveComponents;
