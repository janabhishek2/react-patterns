import React, { useState } from 'react';
import { styled } from 'styled-components';

function Modal(props) {
  const { children } = props;

  const [show, setShow] = useState(false);
  
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
    <button onClick={() => setShow(true)}>Show Modal</button>

    {
        show && (
            <ModalBackground onClick={() => setShow(false)}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setShow(false)}>Hide Modal</button>
                    {
                        children
                    }
                </ModalContent>
            </ModalBackground>
        )
    }
  </>);
}

export default Modal;
