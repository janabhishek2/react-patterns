import React, { useEffect, useRef } from 'react';
import './toys.css';

function Toys() {

    useEffect(() => {
        if(emojiRef.current && dropzoneRef.current) {
            const element = emojiRef.current;

            // 3 events for dragged element
            element.addEventListener("dragstart", (e) => {
                console.log("Start");
                e.dataTransfer.setData("text/plain",emojiRef.current.innerHTML);
            });
            element.addEventListener("dragend", () => {
                console.log("Drag End");
            });
            element.addEventListener("drag", () => {
                console.log("Dragging");
            });

            // 4 events for dropzone
            const dropzone = dropzoneRef.current;
            dropzone.addEventListener("dragenter", (e) => {
                e.preventDefault();
                console.log("Drag enter");
                dropzone.classList.toggle("dragEnter");
            });
            dropzone.addEventListener("dragover", (e) => {
                e.preventDefault();
            })
            dropzone.addEventListener("dragleave", () => {
                dropzone.classList.toggle("dragEnter");
            })
            dropzone.addEventListener("drop", (e) => {
                e.preventDefault();
                dropzone.classList.toggle("dragEnter", false);

                if(e.dataTransfer) {
                    const data = e.dataTransfer.getData("text");
                    const divElement = document.createElement("div");
                    divElement.textContent = data;
                    divElement.style.fontSize = "67px";
                    dropzone.appendChild(divElement);

                    if(dropzone.scrollHeight > dropzone.clientHeight) {
                        dropzone.removeChild(divElement); 
                        console.log("Full!");
                    }
                }
            })

        }
    }, []);

    const emojiRef = useRef(null);
    const dropzoneRef = useRef(null);

    return (
        <div style={{
            position: "relative",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div className='toys'>
                <div className='toys smiley' draggable ref={emojiRef}>
                    😂
                </div>
            </div>
            <div ref={dropzoneRef} className="dropzone"></div>
        </div>
    )
}

export default Toys
