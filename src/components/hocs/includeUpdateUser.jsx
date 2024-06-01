import React, { useEffect, useState } from 'react';
import { updateUser, fetchUser } from './promises';

const includeUpdateUser = (Component) => {
    return (props) => {
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(false);

        const updateCallback = async (updatedUser) => {
            try{
                setLoading(true);
                const user = await updateUser(updatedUser);
                if(!user) throw new Error('failed to update!');
                setUser(user);
            } catch(e) {
                console.log(e.message);
            }  finally{
                setLoading(false);
            }
        };

        const getUser = async (userId) => {
            const user = await fetchUser(userId);
            setUser(user);
        }

        useEffect(() => {
            if(!user) {
                getUser();
            }
        }, [user]);

        return <Component {...props} user={user} updateUser={updateCallback} loading={loading}/>
    }
};

export default includeUpdateUser;
