import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputLabel from "../InputLabel/InputLabel";
import InputRadioGroup from "../InputRadioGroup/InputRadioGroup";
import InputTextField from "../InputTextField/InputTextField";

const StyledCombo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;

  // align-items: flex-start;
  // flex-wrap: wrap;
`;

const StyledButtonDiv = styled.div`
  display: ${props => props.display ? props.display : 'flex'};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: ${props => props.width};
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  padding: 25px;
  border-radius: 35px;
`;
export function DynamicForm({input, width}) {

  const [inputStates, setInputStates] = useState(Array(input.length-1).fill(''));
  

  const handleOnChange = (event, index) => {
    setInputStates((prev) => {
      prev[index] = event.target.value;
      return [...prev];
    }) 
  }

  const handleSubmit = (event, index) => {
    console.log(inputStates)
  }


  const RenderInput = (item, index) => {
    switch(item.type){
      case 'radio' : return <InputRadioGroup input={item} name={item.name} direction={item.direction} onChange={(event) => handleOnChange(event, index)}/>;
      default : return <InputTextField placeholder={item.placeholder} type={item.type} value={inputStates[index]} onChange = {(event) => handleOnChange(event, index)} name={item.name} roundedCorners/>;
    }
  }

  return (
    <StyledForm width={width} onSubmit={handleSubmit}>
      {input.map((item, index) => {
        if(item.type === 'submit'){
          return <StyledButtonDiv display={item.display}>
            <Button onClick={handleSubmit} label={'Proceed'} backgroundColor={'#365171'}/>
          </StyledButtonDiv>
        }
        return <StyledCombo key={index}>
        <InputLabel label={item.label} bold/>
        {RenderInput(item, index)}
      </StyledCombo>
      })}
    </StyledForm>
  );
}
export default DynamicForm;
