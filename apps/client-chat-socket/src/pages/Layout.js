import React from 'react';
import { theme } from '../assets/theme';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { SocketContextProvider } from '../contexts/SocketContextProvider';
import { Provider } from 'react-redux';
import store from '../state/store';

const StyledApplication = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledBox = styled.div`
  height: 400px;
  width: 300px;
`;
export default function Layout() {
  return (
    <Provider store={store}>
      <SocketContextProvider>
        <ThemeProvider theme={theme}>
          <StyledApplication>
            <StyledBox>
              <Outlet />
            </StyledBox>
          </StyledApplication>
        </ThemeProvider>
      </SocketContextProvider>
    </Provider>
  );
}
