import React from 'react'
import Otp from './Otp'

function OtpWrapper() {

    const handleOtpComplete = (otp) => {
        console.log("OTP is", otp);
    };
    return (
        <Otp 
            onOtpComplete={handleOtpComplete}
            count={4}
        />
    )
}

export default OtpWrapper
