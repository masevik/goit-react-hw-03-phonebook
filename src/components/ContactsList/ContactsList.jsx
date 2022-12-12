import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  ContactItem,
  UserIcon,
  PhoneIcon,
  Button,
} from './ContactsList.styled';

export const ContactsList = ({ data, filter, onDeleteContact }) => {
  const filteredContacts = data.filter(item =>
    item.name.toLowerCase().includes(filter)
  );
  const actualList = filter === '' ? data : filteredContacts;

  return (
    <Box width="500px" pl="20px" pr="20px" as="ul">
      {actualList.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <span>
            <UserIcon /> {name}
          </span>
          <span>
            <PhoneIcon />
            {number}
          </span>
          <Button
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </Button>
        </ContactItem>
      ))}
    </Box>
  );
};

ContactsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
};
