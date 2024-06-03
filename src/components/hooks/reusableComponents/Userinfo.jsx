import React from 'react';

function Userinfo(props) {
    const { name, age , country, books } = props;
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <h2>Books: </h2>
            <ul>
                {
                    books.map(book => {
                        return <li key={book}>{book}</li>
                    })
                }
            </ul>
        </>
    )
}

export default Userinfo;
