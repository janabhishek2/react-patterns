import React, { useEffect, useState } from 'react';
import { fetchUser } from './promises';

const includeUser = (Component, userId) => {
    return (props) => {
        const [user, setUser] = useState(null);

        const getUser = async () => {
            const user = await fetchUser(userId);
            setUser(user);
        };
    
        useEffect(() => {
            if(!user) {
                getUser();
            }
        }, [user]);
    
        return <Component {...props} user={user}/>
    }
};

export default includeUser;
