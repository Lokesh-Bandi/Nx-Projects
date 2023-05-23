import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

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
  padding: 3px 8px;
  box-sizing: border-box;
  font-size: 12px;
  color: ${(props) => props.theme.message.textColor};
  border-radius: 15px;
  ${(props) =>
    props.currentUser
      ? ` 
        border-bottom-right-radius: 0px;
  			background: ${props.theme.message.bgColor};
				align-self: flex-end;			
    `
      : ` 
        border-bottom-left-radius: 0px;
				align-self: flex-start;			
  			background: ${props.theme.message.secondaryBgColor};			
    `}
  // max-width: 200px;
`;
export default function MessagesContent() {
	const messages = useSelector((state) => state.messagesReducer.messages);
  return (
    <StyledMessagesDiv>
      {messages.map((item, ind) => {
        return (
          <StyledMessage
            key={ind}
            className="font-message"
            currentUser={item.isUser}
          >
            {item.msg}
          </StyledMessage>
        );
      })}
    </StyledMessagesDiv>
  );
}
