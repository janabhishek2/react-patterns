import React, { useContext, useState } from 'react';
const CardContext = React.createContext(null);

function Card(props) {
    const { children } = props;
    const [count, setCount] = useState(1);

    return (
        <CardContext.Provider value={{
            count, setCount
        }}>
            <div style={{
            width: '80%',
            border: '1px solid black',
            margin: "auto",
            marginTop: "20px"
        }}>
            {children}
        </div>
        </CardContext.Provider>
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
    console.log('render');
    return <div style={{
        backgroundColor: 'cream',
        padding: '15px',
        border: "1px solid grey"
    }}>
        {children}
    </div>
};

const Footer = ({ children, handleClick }) => {
    const { count, setCount } = useContext(CardContext);
    return <div style={{
        padding: '10px'
    }}>
        {
            children
        }
        <hr />
        {
            count
        }
        <button style={{ marginLeft: '10px' }} onClick={() => setCount(count+1)}>Increment</button>
    </div>
};

Card.Header = Header;
Card.Footer = (Footer);
Card.Body = Body;

export default Card;
