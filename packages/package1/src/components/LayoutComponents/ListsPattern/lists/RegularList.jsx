import React from 'react';

function RegularList({ data , source, ItemComponent }) {
  return (
        <ul>
            {
                data.map((item, idx) => {
                    const props = {
                        [source]: item
                    };
                    return <li key={idx}><ItemComponent {...props} /></li>
                })
            }
        </ul>
  )
}

export default RegularList