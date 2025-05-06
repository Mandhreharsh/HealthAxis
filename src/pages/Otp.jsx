import React, { useState, useRef, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Context } from '../index';
import '../css/Otp.css';

const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(Context);
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);
  const [resendTimer, setResendTimer] = useState(0);
  const email = location.state?.email;

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, '');
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('Text').trim().slice(0, 6).replace(/\D/g, '');
    if (pastedData.length === 6) {
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pastedData[i];
        if (inputsRef.current[i]) {
          inputsRef.current[i].value = pastedData[i];
        }
      }
      setOtp(newOtp);
      inputsRef.current[5]?.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join('');

    try {
      const res = await axios.post('http://localhost:7000/api/v1/user/verify-otp', {
        email,
        otp: fullOtp,
      });

      toast.success(res.data.message || 'OTP verified successfully');
      setIsAuthenticated(true);
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid OTP');
    }
  };

  const handleResendOtp = async () => {
    try {
      await axios.post('http://localhost:7000/api/v1/user/resend-otp', { email });
      toast.success('OTP resent successfully');
      setResendTimer(30);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to resend OTP');
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2 className="otp-title">Verify OTP</h2>
        <p className="otp-description">
          Enter the 6-digit OTP sent to <span className="otp-email">{email || 'your email'}</span>
        </p>
        <form onSubmit={handleVerifyOtp}>
          <div className="otp-input-group">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                autoComplete={index === 0 ? 'one-time-code' : undefined}
                className="otp-input"
              />
            ))}
          </div>
          <button type="submit" className="otp-submit-btn">
            Verify OTP
          </button>
        </form>
        <p className="otp-resend-text">
          Didn’t receive an OTP?{' '}
          <button
            className="otp-resend-btn"
            onClick={handleResendOtp}
            disabled={resendTimer > 0}
          >
            Resend {resendTimer > 0 ? `(${resendTimer}s)` : ''}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Otp;
