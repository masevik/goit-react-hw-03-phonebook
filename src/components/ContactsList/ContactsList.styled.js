import styled from 'styled-components';
import { RiUser3Line, RiPhoneLine } from 'react-icons/ri';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 5px;

  span {
    width: 450px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const UserIcon = styled(RiUser3Line)`
  margin-right: 10px;
`;

export const PhoneIcon = styled(RiPhoneLine)`
  margin-right: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 25px;

  padding: 5px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
