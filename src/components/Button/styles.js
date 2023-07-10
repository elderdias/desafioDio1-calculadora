import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  border: none;
  background-color: #00AAF0;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
