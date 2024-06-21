import React, { useState } from 'react';
import { createPortal } from 'react-dom';

function Portals() {

    const [show, setShow] = useState(false);
    const handleShowPortal = () => {
        setShow(true);
    };

    return (
        <div onClick={() => {
            console.log("div click");
        }}>
            <h1>Hello world</h1>
            <button onClick={handleShowPortal}>Show alert</button>
            <Alert show={show} setShow={setShow}>
                Portal content
            </Alert>
        </div>
    )
}

const Alert = ({ show, children, setShow }) => {
    if(!show) return null;

    return createPortal(<div className='alert' style={{
        backgroundColor: "lightgreen",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "10px",
        width: "80%",
        margin: "auto",
        marginTop: "20px",
        cursor: "pointer",
        position: "sticky",
        opacity: "0.5"

    }}
    onClick={(e) => {
        console.log("alert click")
        setShow(false);
    }}>
        {children}
    </div>, 
    document.querySelector("#alert-holder"))
}

export default Portals