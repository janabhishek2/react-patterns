import React, { useState } from 'react';
import './StarRating.css';
import Star from './Star';

const MAX_STARS = 5;

function StarRating(props) {
    const {
        value = 2,
        max_stars = MAX_STARS,
        onChange = () => {}
    } = props;

    const [selectedStar, setSelectedStar] = useState(value-1);
    const [hoveredStar, setHoveredStar] = useState(-1);

    console.log(selectedStar, hoveredStar);
    const handleClick = (index) => {
        return () => {
            setSelectedStar(index);
            onChange(index+1);
        }
    }
    
    const handleMouseEnter = (index) => {
        return () => {
            setHoveredStar(index);
        }
    }

    const handleMouseLeave = () => {
        setHoveredStar(-1);
    }

    return (
        <div className='star-wrapper'>{
        [...new Array(max_stars)].map((_, index) => {
            let starClass = "";
            if(index <= selectedStar) {
                starClass += "active";
            }
            if(index <= hoveredStar) {
                starClass += " hovered";
            }
            return (
                <button 
                key={index} 
                className={starClass}
                onClick={handleClick(index)}
                onMouseEnter={handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                >
                    <Star style={{ 
                        width: "100px",
                        height: "100px"
                    }}/>
                </button>
            )
        })    
        }</div>
    )
}

export default StarRating
