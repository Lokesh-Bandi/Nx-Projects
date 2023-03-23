import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MenuItem, Select, TextField, InputLabel, FormControl, Button } from '@mui/material';
const StyledForm = styled.div`
  display: flex;
  gap: 15px;
//   flex: 50%;
  width: 300px; 
  flex-direction: column;
`;
export default function InputForm({ setInput }) {
  const [newInputObj, setInputObj] = useState({});
  const handleOnChange = (event) => {


    setInputObj((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  const handleOnClick = (event) => {
    console.log(newInputObj)
    setInput((prev) => {
        return [...prev, newInputObj]
    })
  }
  return (
    <StyledForm>
      <TextField
        label="Enter Label Name"
        size="small"
        value={newInputObj['label']}
        onChange={handleOnChange}
        name='label'
      />
      <TextField
        label="Enter Placeholder Name"
        size="small"
        value={newInputObj['placeholder']}
        onChange={handleOnChange}
        name='placeholder'
      />
      <FormControl sx={{ m: 1, minWidth: 120, margin:0 }} size="small">
        <InputLabel id="demo-simple-select-label">Input Type</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newInputObj['type']}
            label="Input Type"
            onChange={handleOnChange}
            name='type'
        >
            <MenuItem value={'date'}>Date</MenuItem>
            <MenuItem value={'text'}>Text</MenuItem>
            {/* <MenuItem value={'radio'}>Radio</MenuItem> */}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleOnClick}>Insert</Button>
    </StyledForm>
  );
}
