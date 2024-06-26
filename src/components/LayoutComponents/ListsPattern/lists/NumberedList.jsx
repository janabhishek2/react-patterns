import React from 'react';
import { styled } from 'styled-components';

const ListWrapper = styled.ul`
text-decoration: none;
list-style: none;
`;

const ListItemComponentWrapper = styled.div`
display: flex;
flex-direction: row;
`;

const IndexWrapper = styled.div``;

const ContentWrapper = styled.div`
margin-left: 1rem;
`;

function NumberedList({ source, data, ItemComponent }) {

  return (
    <ListWrapper>
        {
            data.map((item, index) => {
                return (
                   <ListItemComponentWrapper key={index}>
                        <IndexWrapper>{index + 1}.</IndexWrapper>
                        <ContentWrapper>
                            <li key={index}>
                                <ItemComponent {...{
                                    [source]: item
                                }}/>
                            </li>
                        </ContentWrapper>
                   </ListItemComponentWrapper> 
                );
            })
        }
    </ListWrapper>
  )
}

export default NumberedList