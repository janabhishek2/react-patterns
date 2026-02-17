import React, { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import "./Modal.css";

function Modal({ onClose, children }) {

    const handleAnimationEnd = () => {
         onClose();
    }
    const handleClose = () => {
        backdropRef.current.classList.add('hide-dialog');
        contentRef.current.classList.add('hide-dialog');

        contentRef.current.addEventListener('animationend', handleAnimationEnd, {
            once: true
        });
    }

    const backdropRef = useRef(null);
    const contentRef = useRef(null);

    const handleKeyEvent = (e) => {
        if(e.key === "Escape") {
            handleClose();
        }
    }
    useEffect(() => {
      const keyboardListener =  document.addEventListener("keyup", handleKeyEvent);

      return () => {
        document.removeEventListener("keyup", keyboardListener);
      }
    }, [])

    return createPortal( <div className="dialog">
            
            {/* backdrop */}
            <div className="dialog-backdrop" onClick={handleClose} ref={backdropRef}></div>
            {/* Modal Content */}

            <div className="dialog-content" ref={contentRef}>
                {
                    !!onClose && (<button onClick={handleClose} className="dialog-close">
                        &times;
                    </button>)
                }
                {/* jsx */}
                {children}
            </div>
        </div>, document.getElementsByTagName("body")[0])

}

export default Modal;
