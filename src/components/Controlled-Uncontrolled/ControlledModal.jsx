import React, { useState } from 'react';
import { styled } from 'styled-components';

function ControlledModal(props) {
  const { children, shouldDisplay, onClose } = props;
  
  const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: grey;
  `;

  const ModalContent = styled.div`
        margin: 12% auto;
        width: 50%;
        padding: 24px;
        background: wheat;
    `;

  return (<>
    {
        shouldDisplay && (
            <ModalBackground onClick={onClose}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                    <button onClick={onClose}>Hide Modal</button>
                    {
                        children
                    }
                </ModalContent>
            </ModalBackground>
        )
    }
  </>);
}

export default ControlledModal;
