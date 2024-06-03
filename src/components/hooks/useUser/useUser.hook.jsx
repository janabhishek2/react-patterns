import React, { useEffect, useState } from 'react';
import { fetchUser } from '../reusableComponents/promises';

const useUser = (userId) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        try {
            setLoading(true);
            const response = await fetchUser(userId);
            if(!response) throw new Error('error in fetching user...');

            setUser(response);
        } catch(err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
       if(!user) {
        getUser();
       }
    }, []);

    return {
        user, loading
    };
};

export default useUser;
