import React from 'react';
import includeUpdateUser from './includeUpdateUser';

const UserInfoForm = includeUpdateUser((props) => {
    const { user, loading, updateUser, updateCallback, onReset } = props;
    const isUserLoaded = Object.keys(user).length > 0;
    
    const { name, age } = user;

    const handleNameUpdate = (e) => {
        const name = e.target.value;
        updateUser({
            ...user,
            name
        });
    };

    const handleAgeUpdate = (e) => {
        const age = e.target.value;
        updateUser({
            ...user,
            age
        });
    }

    return isUserLoaded ? (<>
        <h3>Fields..</h3>
        <div>
            <div>
                <label htmlFor='name'>Name: </label>
                <input type="text" value={name} onChange={handleNameUpdate}/>
            </div>
            <div>
                <label htmlFor="age">Age: </label>
                <input type="text" value={age} onChange={handleAgeUpdate}/>
            </div>
            <div>
                <button onClick={onReset}>Reset</button>
                <button onClick={updateCallback} disabled={loading}>Update</button>
            </div>
        </div>
    </>) : (
        <h3>Loading...</h3>
    )
});

export default UserInfoForm;
