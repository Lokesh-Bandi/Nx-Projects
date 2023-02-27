import styled from "@emotion/styled";

const StyledButton = styled.div`
  // display: inline-block;
  background: ${props => props.backgroundColor ? props.backgroundColor : '#0892d0'};
  color: ${props => props.textcolor ? props.textcolor : '#ffffff'};
  border-radius: ${props => props.roundedCorners ? '15px' : '5px'};
  text-align: center;
  padding: 2px 5px;
  cursor: pointer;
`;
export function Button({textcolor, backgroundColor, roundedCorners, block, label, onClick}) {
  return (
    <StyledButton textcolor={textcolor} backgroundColor={backgroundColor} block={block} roundedCorners={roundedCorners} onClick={onClick}>
      {label}
    </StyledButton>
  );
}
export default Button;
