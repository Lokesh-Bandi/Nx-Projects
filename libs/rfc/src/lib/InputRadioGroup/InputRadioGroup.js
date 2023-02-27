import styled from "@emotion/styled";
import InputLabel from "../InputLabel/InputLabel";

const StyledInputDiv = styled.div`
  display: flex;
  border-radius: ${props => props.roundedCorners ? '15px' : '5px'};
  // border: 2px solid #FFBE7BFF;
  box-sizing: border-box;
  flex-direction: ${ props => props.direction ? props.direction : 'row'};
  ${props => props.direction === 'column' ? `
    justify-content: center;
    row-gap: 8px;


  ` : `
    align-items: center;
    flex-wrap: wrap;
    column-gap: 8px;
  `}
`;

const StyledInput = styled.input`
  margin: 0;
  margin-right: 8px;
`;

const StyledOption = styled.div`
  display: flex;
  
`;

export function InputRadioGroup({input, name, direction, onChange}) {
  return (
    <StyledInputDiv direction={direction}>
      {input.values.map((item, index) => {
        return <StyledOption direction={direction} key={index}>
          <StyledInput value={item} name={name} type='radio' onChange={onChange}/>
          <InputLabel label={item} bold/>
        </StyledOption>
      })}
    </StyledInputDiv>
  );
}
export default InputRadioGroup;
