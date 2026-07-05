import React, { useRef, useState } from "react";
let count = 4;
import "./otp.css";

function Otp(props) {
    const { count } = props;
    const arr = new Array(count).fill("");
    const [otps, setOtps] = useState(arr);
    const otpRefs = useRef([]);

    console.log(otps);;
    const handleKeyUp = (index) => {
        const moveFocusToRight = (index) => {
            let temp = index + 1;
            while(otpRefs.current?.[temp] && otpRefs.current[temp].value !== "") temp++;
            otpRefs.current?.[temp]?.focus();
        };

        return (e) => {
            const key = e.key;

            const oldOtpState = [...otps];
            // if key is 0-9, update state and move focus to next el.
            if (key > 0 && key < 9) {
                oldOtpState[index] = key;
                setOtps(oldOtpState);
                moveFocusToRight(index);
            }

            if (key === "ArrowRight") {
                moveFocusToRight(index)
            }
            if (key === "ArrowLeft") {
                otpRefs.current?.[index - 1]?.focus();
            }
            // handleBackspace: update state "" and move focus to prev el.
            if (key === "Backspace") {
                oldOtpState[index] = "";
                setOtps(oldOtpState);

                otpRefs.current?.[index - 1]?.focus();
            }
        };
    };

    const handleClick = () => {
        return (e) => {
            e.target.setSelectionRange(1, 1);
        }
    }
    
    const handlePaste = (index) => {
        return (event) => {
            console.log(event?.clipboardData?.getData("text"))
        }
    };

    return (
        <div className="otp-wrapper">
            {arr.map((otp, index) => {
                return (
                    <input
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        // onChange={handleChange(index)}
                        value={otps[index] ? "*": ""}
                        onClick={handleClick()}
                        onPaste={handlePaste(index)}
                        ref={(el) => (otpRefs.current[index] = el)}
                        onKeyUp={handleKeyUp(index)}
                        maxLength={1}
                        className="otp-item"
                    />
                );
            })}
        </div>
    );
}

function OtpWrapper(props) {
    return <Otp count={4} />;
}

export default OtpWrapper;
