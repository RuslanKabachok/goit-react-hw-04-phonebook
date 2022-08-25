import React, { Component } from 'react';
import { Label, Input } from './Form.styled';
import { Button } from 'components/Button/Button.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          ></Input>
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          ></Input>
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

export default Form;
