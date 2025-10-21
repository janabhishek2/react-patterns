import React, { forwardRef, useEffect, useRef, useReducer } from 'react';
import "./style.css";

export default function Listing(props) {

    const CardContainer = forwardRef(({ children }, containerRef) => <div className='card-container' ref={containerRef}>{children}</div>);

    const cardsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            // if(entry.isIntersecting) cardsObserver.unobserve(entry.target);
        })
    });

    const containerRef = useRef(null);
    
    useEffect(() => {
        if(containerRef?.current) {
        const cards =containerRef?.current?.children ?? [];
        for(let card of cards) {
            cardsObserver.observe(card);
        }
        }
    }, [containerRef?.current])

    return <CardContainer ref={containerRef}>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
        <div className='card'>This is a Card</div>
    </CardContainer>
}