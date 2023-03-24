import { DynamicForm } from '@my-org/rfc';
import { Global, css } from '@emotion/react';
import InputForm from '../components/InputForm';
import { useState } from 'react';
import styled from '@emotion/styled';
import SideBar from '../components/SideBar';


const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 20px;
  gap: 20px;
`;

const StyledAppBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  gap: 20px;
  flex-grow: 1;

`;

const StyledHeader = styled.div``;
const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 20px;
  flex-grow: 1;
`;

export function App() {
  const [input, setInput] = useState([
    {
      label: 'Firstname',
      placeholder: 'Enter your firstname',
      type: 'text',
    },
    {
      label: 'Lastname',
      placeholder: 'Enter your lastname',
      type: 'text'
    },
    {
      label: 'Fullname',
      placeholder: 'Enter your fullname',
      type: 'text'
    },
    {
      label: 'Email',
      placeholder: 'Enter your email',
      type: 'email'
    },
    {
      label: 'Password',
      placeholder: 'Enter your password',
      type: 'password'
    },
    {
      label: 'DOB',
      placeholder: 'Enter your DOB',
      type: 'date'
    },
    {
      label: 'Select your gender',
      type: 'radio',
      name: 'gender',
      values: ['male', 'female'],
      direction: 'row'
    },
    {
      label: 'Proceed',
      type: 'submit', 
      display: 'flex'
    },
    {
      label: 'Range Example',
      type: 'range',
      min: 0,
      max: 100
    }
  ]);

  return <>
    <Global styles={css`
    #root { 
      text-align: center;
    }
    `} />
    <StyledApp>
      <SideBar />
      <StyledAppBody>
        <StyledHeader>
          <h3>Dynamic Form</h3>
        </StyledHeader>
        <StyledBody>
          <InputForm setInput={setInput} />
          <DynamicForm input={input} width={'300px'}/>
        </StyledBody>
      </StyledAppBody>
    </StyledApp>
  </>
}
export default App;
