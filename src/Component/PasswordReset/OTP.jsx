import { Input } from "antd";
import React, { useState, useRef, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function OTP({ otp, setOtp, handleOtpSend }) {
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const toggleVisibility = () => {
    setIsOtpVisible(!isOtpVisible);
  };

  const resendOtp = () => {
    setOtp(Array(6).fill(""));
    setTimer(60);
    setIsResendDisabled(true);
    inputRefs.current[0].focus();
    // Add logic to send OTP here
  };

  return (
    <>
      <div className="otp-container d-flex align-items-center justify-content-center ">
        {otp.map((data, index) => (
          <Input
            autoFocus={index === 0}
            key={index}
            type={isOtpVisible ? "text" : "password"}
            maxLength="1"
            className="otp-input formInput"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
        <span className="toggle-visibility" onClick={toggleVisibility}>
          {isOtpVisible ? <FaEyeSlash /> : <FaRegEye />}
        </span>
      </div>
      <div className="resend-container d-flex align-items-center justify-content-start my-3">
        Didn't recived otp?&nbsp;
        {isResendDisabled ? (
          <span className="timer">{` resend in 00:${
            timer < 10 ? `0${timer}` : timer
          } sec`}</span>
        ) : (
          <button
            className="resend-button"
            onClick={() => {
              resendOtp();
              handleOtpSend();
            }}
          >
            Resend OTP
          </button>
        )}
      </div>
    </>
  );
}

export default OTP;
