import React, { useEffect, useRef, useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';

export default function() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleChange = ({ target: { name, value }}) => {
        if(name === "username") {
            setUsername(value);
        } else {
            setPassword(value);
        }
    };
    const submit = () => {
        userNameRef.current.focus();
        // passwordRef.current.focus();
        console.log("HuiHui");
    };

    return(
        <>
        <input type="text" name="username" ref={userNameRef} placeholder='username' onChange={handleChange} />
        <input type="text" name="password" ref={passwordRef} placeholder='password' onChange={handleChange} />
        <button onClick={submit}>Submit</button>
        </>
    )
}