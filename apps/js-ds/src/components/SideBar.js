import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom';

const StyledSideBar = styled.div`
    min-width: 150px;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const StyledSideBarItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    background: #46c47b;
    border-radius: 10px;
`;
export default function SideBar() {
  const sideBarItemArray = {'Dynamic form' : '/', 'Spiral Algo' : '/spiralAlgoAnimation', 'Coming soon...' : '/', 'Coming soon...1' : '/' }
  return <StyledSideBar>
    {Object.keys(sideBarItemArray).map((item, index) => {
        return <StyledSideBarItem><Link to={sideBarItemArray}>{item}</Link></StyledSideBarItem>
    })}
  </StyledSideBar>
}
