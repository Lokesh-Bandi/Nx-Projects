import React, { useState } from 'react';
import { DynamicForm } from '@my-org/rfc';
import InputForm from '../components/InputForm';
import { StyledBody, StyledHeader } from '../CustomTags/UtilTags';

export default function DynamicFormComponent() {
  const [input, setInput] = useState([
    {
      label: 'Firstname',
      placeholder: 'Enter your firstname',
      type: 'text',
    },
    {
      label: 'Lastname',
      placeholder: 'Enter your lastname',
      type: 'text',
    },
    {
      label: 'Fullname',
      placeholder: 'Enter your fullname',
      type: 'text',
    },
    {
      label: 'Email',
      placeholder: 'Enter your email',
      type: 'email',
    },
    {
      label: 'Password',
      placeholder: 'Enter your password',
      type: 'password',
    },
    {
      label: 'DOB',
      placeholder: 'Enter your DOB',
      type: 'date',
    },
    {
      label: 'Select your gender',
      type: 'radio',
      name: 'gender',
      values: ['male', 'female'],
      direction: 'row',
    },
    {
      label: 'Proceed',
      type: 'submit',
      display: 'flex',
    },
    {
      label: 'Range Example',
      type: 'range',
      min: 0,
      max: 100,
    },
  ]);

  return (
    <>
      <StyledHeader>
        <h3>Dynamic Form</h3>
      </StyledHeader>
      <StyledBody gap={'20'}>
        <InputForm setInput={setInput} />
        <DynamicForm input={input} width={'300px'} />
      </StyledBody>
    </>
  );
}
