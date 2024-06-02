import React from 'react';

function UserInfo({ user, updateUser, loading }) {
    const { name, age, country, books } = user || {};

    const handleUpdate = () => {
        const updatedUser = {...user};
        updatedUser.name = 'new-name';
        updatedUser.age = 22;
        updatedUser.country = 'India';

        updateUser(updatedUser);
    };

    return Object.keys(user).length > 0 ? (
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

            <hr />
            <button onClick={handleUpdate} disabled={loading}>Update User</button>
        </>
    ): (
        <h3>Loading....</h3>
    )
}

export default (UserInfo); 
