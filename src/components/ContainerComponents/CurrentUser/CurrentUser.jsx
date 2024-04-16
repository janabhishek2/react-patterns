import React, { useEffect, useState } from 'react';

function CurrentUser({ children }) {
    const [user, setUser] = useState({});

    const fetchCurrentUser = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Abhishek',
                age: 24,
                books: ['react', 'react-dom', 'webpack']
            })
        }, 3000);
    });
    }

  useEffect(() => {
    const updateUser = async () => {
      const user = await fetchCurrentUser();
      setUser(user);
    }
    updateUser();
    return () => {};
  }, []);

  return (
    React.Children.map(children, (child) => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, { user });
        }
        return child;
    })
  )
}

export default CurrentUser