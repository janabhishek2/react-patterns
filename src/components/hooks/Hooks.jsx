import React from 'react';
import Userinfo from './reusableComponents/Userinfo';
import useCurrentUser from './useCurrentUser/useCurrentUser';

function Hooks() {
    const user = useCurrentUser();
    return (
        user ? (
            <Userinfo {...user} />
        ) : (
            <h2>Loading....</h2>
        )
    )
}

export default Hooks;
