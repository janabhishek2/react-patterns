import React, { useEffect, useRef, useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';
import Input from './Input';

export default function() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    console.log(userNameRef);
    const handleUserNameChange = (val) => {
        setUsername(val);
    };

    const handlePassChange = (val) => {
        setPassword(val);
    }

    const submit = () => {
        userNameRef.current.focus();
        // passwordRef.current.focus();
        console.log("HuiHui");
    };

    return(
        <>
        <Input type="text" name="username" ref={userNameRef} placeholder='username' inputChange={handleUserNameChange} label="Username" />
        <Input type="password" name="password" placeholder='password' inputChange={handlePassChange} label="Password" />
        <button onClick={submit}>Submit</button>
        </>
    )
}