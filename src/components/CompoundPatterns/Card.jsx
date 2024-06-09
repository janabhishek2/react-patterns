import React from 'react'

function Card(props) {
    const { children } = props;
    return (
        <div style={{
            width: '80%',
            border: '1px solid black',
            margin: "auto",
            marginTop: "20px"
        }}>
            {children}
        </div>
    )
}

const Header = ({ children }) => {
    return <div style={{
        padding: '10px'
    }}>
        {
            children
        }
    </div>
};

const Body = ({children}) => {
    return <div style={{
        backgroundColor: 'cream',
        padding: '15px',
        border: "1px solid grey"
    }}>
        {children}
    </div>
};

const Footer = ({ children }) => {
    return <div style={{
        padding: '10px'
    }}>
        {
            children
        }
    </div>
};

Card.Header = Header;
Card.Footer = Footer;
Card.Body = Body;

export default Card;
