import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #282828;
  width: 50%;
  padding: 20px;
  border-radius: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
