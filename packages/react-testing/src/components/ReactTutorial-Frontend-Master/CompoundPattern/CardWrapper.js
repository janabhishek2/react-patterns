import React from 'react'
export const CardContext = React.createContext(null);
function CardWrapper({ children, data }) {

    return (
        <CardContext.Provider value={{ data }}>
            <div className='card-wrapper'>
                {children}
            </div>
        </CardContext.Provider>
    )
}

export default CardWrapper
