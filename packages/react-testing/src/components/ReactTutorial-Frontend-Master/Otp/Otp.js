import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./otp.css";

function Otp(props) {
    const { count } = props;

    const [otps, setOtps] = useState(Array.from({ length: count }, () => ""));

    const handleChange = (index) => {
        return (event) => {
            let oldOtps = [...otps];

            const key = event.key;

            if (key === "Backspace") {
                oldOtps[index] = "";
                if (inputRefs?.current?.[index - 1]) {
                    inputRefs?.current?.[index - 1]?.focus();
                }
                setOtps(oldOtps);
            }

            if (key === "ArrowRight") {
                moveFocusToRight(index, oldOtps);
            }

            if (key === "ArrowLeft") {
                moveFocusToLeft(index, oldOtps);
            }

            if (isNaN(key)) {
                return;
            }
            oldOtps[index] = event.key;
            if (inputRefs?.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
            setOtps(oldOtps);
        };
    };

    const moveFocusToLeft = (index, oldOtps) => {
        if (inputRefs?.current?.[index - 1]) {
            const emptyIndex = oldOtps.indexOf("");
            inputRefs?.current?.[emptyIndex]?.focus();
        }
    };

    const moveFocusToRight = (index, oldOtps) => {
        // While right field is not empty

        if (inputRefs?.current[index + 1]) {
            const emptyIndex = oldOtps.indexOf("");
            inputRefs.current[emptyIndex].focus();
        }
    };

    const inputRefs = useRef([]);

    const handleClick = (index) => {
        return (event) => {
            inputRefs.current[index].setSelectionRange(1, 1);
        };
    };

    return (
        <div className="otp-wrapper">
            {Array.from({ length: count }, (_, i) => i).map((item, index) => {
                return (
                    <input
                        ref={(el) => (inputRefs.current[index] = el)}
                        maxLength={1}
                        id={index}
                        onClick={handleClick(index)}
                        value={otps[index]}
                        onKeyUp={handleChange(index)}
                    />
                );
            })}
        </div>
    );
}

Otp.propTypes = {};

export default Otp;
