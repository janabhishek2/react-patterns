import { useEffect, useState } from "react";
import { fetchUser } from "../reusableComponents/promises";

const useCurrentUser = () => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const response = await fetchUser();
            if(!response) throw new Error('error fetching user');

            setUser(response);
        } catch(err) {
            
        }
    }
    useEffect(() => {
        if(!user) {
            getUser();
        }
    }, []);

    return user;
};

export default useCurrentUser;
