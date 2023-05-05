import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import firebase from '../firebase/firebase.js';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const StyledLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
  width: 100%;
  border: 2px solid ${(props) => props.theme.container.bgColor};
  background: ${(props) => props.theme.header.bgColor};
  font-family: 'Times New Roman', Times, serif;
  border-radius: 15px;
`;
const StyledInput = styled.input`
  flex-grow: 1;
  max-height: 30px;
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.header.bgColor};
  padding: 4px 6px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.container.borderColor};
  }
`;

const StyledTitle = styled.div`
  font-size: 35px;
  color: ${(props) => props.theme.title.textColor};
`;
const StyledButton = styled.button`
  height: 30px;
  width: 100px;
  cursor: pointer;
  border-radius: 25px;
  font-weight: 600;
  outline: none;
  border: 0px solid;
  background: ${(props) => props.theme.button.bgColor};
  color: ${(props) => props.theme.button.textColor};
  &:hover {
    background: ${(props) => props.theme.button.hoverColor};
  }
`;

const StyledInputDiv = styled.div`
  width: 80%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const StyledCodeBox = styled.div`
  padding: 3px 6px;
  box-sizing: border-box;
  border-radius: 25px;
  font-weight: 600;
  background: ${(props) => props.theme.button.bgColor};
`;
export default function Login() {
  const [mobileNumber, setMobileNumber] = useState('+911234509876');   
  const navigate = useNavigate();  
  const auth = getAuth();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [showOTPField, setShowOTPField] = useState(false);
  const [otp, setOtp] = useState("");


  const setRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        setUserLoggedIn(true);
        setShowOTPField(true);
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    }, auth);
  }

  const onSignInSubmit = (event) => {
    event.preventDefault();
    setRecaptcha();
    let phoneNumber = mobileNumber;
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        const code = '123456';
        confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    })
  }
  
  const handleInputChange = (event) => {
    console.log(event.target.id);
    if(event.target.id === 'otp'){
      setOtp(event.target.value);
    }
    else{
      setMobileNumber(event.target.value);
    }
  } 
  const loginClick = (event) => {
    // navigate('/chat');
    onSignInSubmit(event);
  };
  return (
    <StyledLoginDiv>
      <StyledTitle>Login</StyledTitle>
      <StyledInputDiv>
        <StyledCodeBox>+91</StyledCodeBox>
        <StyledInput type="text" id='phoneNumber' onChange={handleInputChange} value={mobileNumber} placeholder="Enter your phone number" />
      </StyledInputDiv>
      { !userLoggedIn && <div id='recaptcha-container'></div>}
      { userLoggedIn && <StyledInput type="text" id='otp' onChange={handleInputChange} value={otp} placeholder="Enter OTP" />}
      <StyledButton onClick={loginClick}>Send OTP</StyledButton>
    </StyledLoginDiv>
  );
}
