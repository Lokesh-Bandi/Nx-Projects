import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const scaleXTransform = keyframes`
  from {
    transform : scaleX(0);
    opacity: 0;
  }
  to {
    transform : scaleX(1);
    opacity: 1;
  }
`;


const StyledLabel = styled.div`
  display: inline-block;
  font-weight: ${props => props.bold ? 'bold' : '100'};
  font-size: ${props => props.fontSize ? props.fontSize : '14px'};
  color: ${props => props.color ? props.color : '#3f3838'};
  transform-origin: left;
  animation : ${scaleXTransform} 1s ease-in-out;

`;
export function InputLabel({label, bold, fontSize}) {
  return (
    <StyledLabel bold={bold} fontSize={fontSize}>{label}</StyledLabel>
  );
}
export default InputLabel;
