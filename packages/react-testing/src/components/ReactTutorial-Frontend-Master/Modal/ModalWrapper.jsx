import React from 'react'
import Modal from './Modal';

function ModalWrapper() {

    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => {
       setShowModal(true)
    };

    return (
        <div style={{
            marginTop: "2rem"
        }}>
            <button onClick={handleShowModal}>Open Modal</button>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Open Google
            </a>
            {showModal && (
               <Modal onClose={() => setShowModal(false)}>
                   <h1>This is the heading</h1>
                   Random Text
               </Modal>
            )}
        </div>
    )
}

export default ModalWrapper;
