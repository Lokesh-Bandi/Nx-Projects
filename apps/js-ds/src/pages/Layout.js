import React from 'react';
import styled from '@emotion/styled';
import { Outlet, Link } from 'react-router-dom';

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
  gap: 5px;
  flex-grow: 1;
`;

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
export default function Layout() {
  const sideBarItemArray = {
    'Dynamic form': '/',
    'Spiral Algo': '/spiralAlgoAnimation',
    'Socket Client': '/socketClient',
    'Coming soon...1': '/',
  };

  return (
    <StyledApp>
      <StyledSideBar>
        {Object.keys(sideBarItemArray).map((item, index) => {
          return (
            <StyledSideBarItem>
              <Link to={sideBarItemArray[item]}>{item}</Link>
            </StyledSideBarItem>
          );
        })}
      </StyledSideBar>
      <StyledAppBody>
        <Outlet />
      </StyledAppBody>
    </StyledApp>
  );
}
