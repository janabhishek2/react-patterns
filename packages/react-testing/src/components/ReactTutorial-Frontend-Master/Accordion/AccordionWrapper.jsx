import React, { useState } from "react";
import './accordion.css';

export default function AccordionWrapper() {
    return <Accordion heading="Accordion Title">
        <h1>Content!!</h1>
    </Accordion>;
}

function Accordion({ heading, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentClasses = `accordion-content ${isOpen ? "": "disabled"}`;

    const handleAccordionToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div data-expanded={isOpen} className="accordion">
            <button aria-controls="panel" aria-expanded={isOpen} onClick={handleAccordionToggle} className="accordion-heading">
                <h2>
                    THis is the heading
                </h2>
                {heading}
            </button>
            <div id="panel" className={contentClasses} aria-hidden={!isOpen}>{children}</div>
        </div>
    );
}
