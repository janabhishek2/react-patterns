import React, { useContext } from 'react';
import { CardContext } from './CardWrapper';

function CardHeader(props) {
    const { children } = props;
    const { data: {
      headerData = ""
    }} = useContext(CardContext);

    return (
        <div className='card-header'>
                {headerData || children}
        </div>
    )
}

export default CardHeader;
