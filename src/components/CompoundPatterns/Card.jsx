import React from 'react'

function Card(props) {
    const { header, body, footer } = props;
    return (
        <div style={{
            width: '80%',
            border: '1px solid black',
            margin: "auto",
            marginTop: "20px"
        }}>
            {header && <Card.Header>{header}</Card.Header>}
            {body && <Card.Body>{body}</Card.Body>}
            {footer && <Card.Footer>{footer}</Card.Footer>}
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
