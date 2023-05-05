import React from 'react';
import styled from '@emotion/styled';

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
  return <StyldeInputDiv>
    <StyledInput type='text' placeholder='Type here....'/>
    <StyledButton>
        <img src='../../assets/sendIcon.png' />
    </StyledButton>
  </StyldeInputDiv>
}
