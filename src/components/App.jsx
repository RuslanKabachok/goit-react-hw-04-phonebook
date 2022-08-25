import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper, Paragraph } from './App.styled';
import Form from './Form/Form';
import Contacts from 'components/ContactList/ContactList';
import Find from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    const initialContacts = this.state.contacts;

    if (initialContacts.find(item => item.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  handleFindInput = value => {
    this.setState({ filter: value });
  };

  handleDeleteUser = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const normalizedContacts = JSON.parse(contacts);

    if (normalizedContacts) {
      this.setState({ contacts: normalizedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const normalizedContacts = this.state.filter.toLocaleLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );

    return (
      <Wrapper>
        <Paragraph>PhoneBook</Paragraph>
        <Form onSubmit={this.addContact} />
        <Paragraph>Find contacts by name</Paragraph>
        <Find onFindInput={this.handleFindInput} />

        <Contacts
          contacts={filteredContacts}
          onDelete={this.handleDeleteUser}
        />
      </Wrapper>
    );
  }
}

export default App;
