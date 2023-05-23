import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useSocket from '../../hooks/useSocket';
import { sendMessageEvent } from '../../socket/EmittingEvents';
import { useDispatch } from 'react-redux';


const StyldeInputDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
`;

const StyledInput = styled.input`
    flex-grow: 1;
    height: 30px;
    border-radius: 20px;
    border:2px solid ${props => props.theme.container.borderColor};
    padding: 4px 6px;
    box-sizing: border-box;
    &:focus{
        outline: none;
        border:2px solid ${props => props.theme.header.bgColor};
    }
`;

const StyledButton = styled.div`
    height: 30px;
    cursor: pointer;
    transition: all 300ms ease-in;
    &:hover {
        transform: rotateZ(45deg);
    }
`;

export default function InputDiv() {
  const [msg, setMsg] = useState("");
  const { isConnected, socket } = useSocket();
  const dispatch = useDispatch();

  const handleMessage = (event) => {
    setMsg(event.target.value);
  }
  const sendMessage = (event) => {
    if(isConnected){
        sendMessageEvent(socket, 'NewMessage', {message : msg}, '+911234509876')
    }
    // dispatch({
    //   type: 'NEW_MESSAGE',
    //   isUser: true,
    //   msg: msg
    // });
    setMsg('');
  }
  return <StyldeInputDiv>
    <StyledInput type='text' placeholder='Type here....' value={msg} onChange={handleMessage}/>
    <StyledButton onClick={sendMessage}>
        <img src='../../assets/sendIcon.png' alt=''/>
    </StyledButton>
  </StyldeInputDiv>
}
