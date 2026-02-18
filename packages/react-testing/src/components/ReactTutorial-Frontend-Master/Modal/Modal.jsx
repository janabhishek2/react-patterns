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

    const blockOutsideElements = () => {
        const body = document.body;
        
        const allBodyElements = [...body.children];

        allBodyElements.forEach((el) => {
            if(!el.getAttribute("data-dialog")) {
                el.setAttribute("aria-hidden", true);
                el.setAttribute("inert", true);
            }
        })
    }

    const unblockOutsideElements = () => {
         const body = document.body;
        
        const allBodyElements = [...body.children];

        allBodyElements.forEach((el) => {
            if(!el.getAttribute("data-dialog")) {
                el.removeAttribute("aria-hidden");
                el.removeAttribute("inert");
            }
        })
    }

    const backdropRef = useRef(null);
    const contentRef = useRef(null);
    const closeRef = useRef(null);

    const handleKeyEvent = (e) => {
        if(e.key === "Escape") {
            handleClose();
        }

        if(e.key === "Tab") {
            if(document.activeElement.classList.contains('save')) {
                const el = document.getElementsByClassName('dialog-close')[0];
                
                e.preventDefault();
                e.stopPropagation();
                el.focus();
            }
        }
    }

    const focusOnClose = () => {
        closeRef.current.focus();
    };

    useEffect(() => {
      const keyboardListener =  document.addEventListener("keydown", handleKeyEvent);
      //   To block interaction of outside elements with DOM.
      blockOutsideElements();
      focusOnClose();
      return () => {
        document.removeEventListener("keydown", keyboardListener);
        unblockOutsideElements();
      }
    }, [])

    return createPortal( <div className="dialog" data-dialog="true" >
            
            {/* backdrop */}
            <div className="dialog-backdrop" onClick={handleClose} ref={backdropRef}></div>
            {/* Modal Content */}

            <div className="dialog-content" ref={contentRef}>
                {
                    !!onClose && (<button ref={closeRef} onClick={handleClose} className="dialog-close">
                        &times;
                    </button>)
                }
                {/* jsx */}
                {children}
            </div>
        </div>, document.getElementsByTagName("body")[0])

}

export default Modal;
