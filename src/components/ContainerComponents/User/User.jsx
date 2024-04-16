import React from 'react';

function User(props) {
  const { user = {} } = props;
  const { name, age, books = []} = user;
  return Object.keys(user).length > 0 ? (
    <div>
        <h3>Details</h3>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Books</div>
        <ul>
            {
                books.map((book, _) => <li key={_}>{book}</li>)
            }
        </ul>
    </div>
  ) : (
    <h3>Loading.....</h3>
  );
}

export default User;
