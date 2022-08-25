import { useState, useEffect } from 'react';
import { Wrapper, Paragraph } from './App.styled';
import Form from './Form/Form';
import Contacts from 'components/ContactList/ContactList';
import Find from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(contact) {
    if (contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevState => [contact, ...contacts]);
    }
  }

  const handleFindInput = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  const normalizedContacts = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContacts)
  );

  function handleDeleteUser(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <Wrapper>
      <Paragraph>PhoneBook</Paragraph>
      <Form onSubmit={addContact} />
      <Paragraph>Find contacts by name</Paragraph>
      <Find inputValue={filter} onFindInput={handleFindInput} />

      <Contacts contacts={filteredContacts} onDelete={handleDeleteUser} />
    </Wrapper>
  );
}
