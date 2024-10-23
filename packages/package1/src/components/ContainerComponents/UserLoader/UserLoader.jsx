import React, { useEffect, useState } from 'react'

function UserLoader({ children, userId = '' }) {

  const [user, setUser] = useState({});

  const fetchUser = async (userId) => {
    const user = await new Promise((resolve, reject) => {
        resolve({
            age: `age - ${userId}`,
            name: `User - ${userId}`,
            books: []
        });
    });
    setUser(user);
  }

  useEffect(() => {
    if(userId !== '' && Object.keys(user).length === 0) {
        fetchUser(userId);
    }
  }, [userId]);

  const isLoading = Object.keys(user).length === 0;
  return isLoading ? (<h1>Loading...</h1>): (
    React.Children.map(children, (child) => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, { user, key: userId })
        } else return child;
    })
  )
}

export default UserLoader;
