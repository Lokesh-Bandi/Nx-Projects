import styled from '@emotion/styled';

export const StyledHeader = styled.div``;
export const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  margin: 5px;
  gap: ${props => props.gap}px;
  flex-grow: 1;
`;