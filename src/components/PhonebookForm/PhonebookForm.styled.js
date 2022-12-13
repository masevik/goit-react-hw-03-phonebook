import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
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

export const Input = styled(Field)`
  margin-bottom: 10px;
  width: 100%;
  height: 35px;
`;

export const Error = styled(ErrorMessage)`
  margin-bottom: 10px;
  color: red;
`;
