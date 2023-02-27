import styled from "@emotion/styled";
import InputLabel from "../InputLabel/InputLabel";
import InputTextField from "../InputTextField/InputTextField";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  ${props => props.direction === 'row' ? 
    `
      column-gap: 10px; 
      align-items: center;
    `
    :
     `
      row-gap: 5px;
      justify-content: center;
      `
    };
`;
export function InputTextWithLabel({direction = 'row'}) {
  return (
    <StyledDiv direction={direction}>
      <InputLabel label={"Firstname"} bold/>
      <InputTextField placeholder={"Enter your name"} type={"text"} isRoundedCorner />
    </StyledDiv>
  );
}
export default InputTextWithLabel;
