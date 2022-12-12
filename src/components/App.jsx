import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Box } from './Box';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { PhonebookForm } from './PhonebookForm';
import { Section } from './Section';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFilterChange = filter => this.setState({ filter: filter.toLowerCase() });

  addContact = ({ name, number }) => {
    const isInContacts = this.state.contacts.some(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isInContacts) {
      alert(name + ' is already in contacts');
      return false;
    }
    const currentContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(({ contacts }) => ({
      contacts: [currentContact, ...contacts],
    }));

    return true;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { addContact, onFilterChange, deleteContact } = this;
    const { filter, contacts } = this.state;

    return (
      <Box ml="50px" mt="20px">
        <Section title="Phonebook">
          <PhonebookForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length !== 0 && (
            <>
              <Filter value={filter} onChange={onFilterChange} />
              <ContactsList
                data={contacts}
                filter={filter}
                onDeleteContact={deleteContact}
              />
            </>
          )}
        </Section>
      </Box>
    );
  }
}
