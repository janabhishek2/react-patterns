import React from 'react';
import Userinfo from './reusableComponents/Userinfo';
import useUser from './useUser/useUser.hook';

function Hooks() {
    const { user, loading } = useUser(1);

    return (
        (!loading && user) ? (
            <Userinfo {...user} />
        ) : (
            <h2>Loading....</h2>
        )
    )
}

export default Hooks;
