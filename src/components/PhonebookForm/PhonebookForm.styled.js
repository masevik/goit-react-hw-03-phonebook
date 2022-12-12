import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid black;
`;

export const Button = styled.button`
  width: 120px;
  height: 35px;
  margin-left: 20px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  height: 35px;
`;
