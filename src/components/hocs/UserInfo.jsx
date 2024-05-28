import React from 'react'

function UserInfo({ user }) {
    const { name, age, country, books } = user || {};
    return user ? (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <h2>Books</h2>
            <ul>
                {
                    books.map(book => {
                        return (<li key={book.id}>{book.name}</li>)
                    })
                }        
            </ul>
        </>
    ): (
        <h3>Loading....</h3>
    )
}

export default (UserInfo); 
