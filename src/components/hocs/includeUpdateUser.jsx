import React, { useEffect, useReducer, useState } from 'react';
import { updateUser as updateUserApiCall, fetchUser } from './promises';

const userInitialState = {
    initial: {},
    current: {}
};

const userReducer = (state, action) => {
    switch(action.type) {
        case 'update_user': {
            return {
                ...state,
                current: action.payload
            }
        }
        case 'set_user': {
            return {
                initial: action.payload,
                current: action.payload
            }
        }
        case 'reset_user': {
            return  {
                ...state,
                current: state.initial,
            }
        }
        default: {
            return state;
        }
    }
};

const includeUpdateUser = (Component) => {
    return (props) => {
        const [userState, userDispatch] = useReducer(userReducer, userInitialState);
        console.log(userState);
    
        const [loading, setLoading] = useState(false);
        const updateCallback = async (updatedUser) => {
            try{
                setLoading(true);
                const user = await updateUserApiCall(updatedUser);
                if(!user) throw new Error('failed to update!');
                userDispatch({
                    type: 'set_user',
                    payload: userState.current
                });
            } catch(e) {
                console.log(e.message);
            }  finally{
                setLoading(false);
            }
        };

        const updateUser= (user) => {
            userDispatch({
                type: 'update_user',
                payload: user
            })
        }

        const getUser = async (userId) => {
            const user = await fetchUser(userId);
            userDispatch({
                type: 'set_user',
                payload: user
            });
        };

        const onReset = () => {
            userDispatch({
                type: 'reset_user',
            });
        }

        useEffect(() => {
            const isUserExists = Object.keys(userState.current).length > 0;
            
            if(!isUserExists) {
                getUser();
            }
        }, [userState?.current]);

        return <Component {...props} user={userState.current} updateUser={updateUser} updateCallback={updateCallback} loading={loading} onReset={onReset} />
    }
};

export default includeUpdateUser;
