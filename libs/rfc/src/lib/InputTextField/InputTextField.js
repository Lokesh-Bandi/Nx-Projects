import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const scaleXTransform = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const StyledInputDiv = styled.input`
  display: flex;
  border-radius: ${props => props.roundedCorners ? '15px' : '5px'};
  border: 2px solid #FFBE7BFF;
  padding: 2px 5px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border:2px solid #4169e1; 
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  } 
  animation : ${scaleXTransform} 2s ease-in-out;
`;
export function InputTextField({placeholder, type, roundedCorners, value, onChange, name}) {
  return (
    <StyledInputDiv placeholder={placeholder} type={type} roundedCorners={roundedCorners} onChange={onChange} value={value} name={name}/>
  );
}
export default InputTextField;
