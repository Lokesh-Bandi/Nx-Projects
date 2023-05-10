import React, { useState } from 'react'
import styled from '@emotion/styled';

const StyledMessagesDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    gap: 5px;
`;

const StyledMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.message.bgColor};
    padding: 3px 8px;
    box-sizing: border-box;
    font-size: 12px;
    color: ${props => props.theme.message.textColor};
    border-radius: 15px;
    ${props => props.currentUser ? ` 
        border-bottom-left-radius: 0px;
    `: ` 
        border-bottom-right-radius: 0px;
        align-self: flex-end;
    ` }
    max-width: 200px;
`;
export default function MessagesContent() {

  return (
    <StyledMessagesDiv>
        {[...Array(22)].map((item, ind) => {
            return <StyledMessage key={ind} className='font-message' currentUser={ind%2===0}>
            Hello!!! I'm back to build....Hello!!! I'm back to build.... {ind}
        </StyledMessage>
        })}
        
    </StyledMessagesDiv>
    )
}
