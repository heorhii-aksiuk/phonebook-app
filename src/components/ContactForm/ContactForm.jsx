import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const INPUT = {
  NAME: {
    PATTERN: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    TITLE:
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles Miller',
  },
  NUMBER: {
    PATTERN: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
    TITLE:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmitForm } = this.props;
    onSubmitForm({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  inputNameId = nanoid(5);
  inputNumberId = nanoid(5);

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputNameId}>Name</label>
          <input
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            id={this.inputNameId}
            pattern={INPUT.NAME.PATTERN}
            title={INPUT.NAME.TITLE}
            required
          />
          <label htmlFor={this.inputNumberId}>Number</label>
          <input
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            id={this.inputNumberId}
            pattern={INPUT.NUMBER.PATTERN}
            title={INPUT.NUMBER.TITLE}
            required
          />
          <Button type="submit">Add contact</Button>
        </form>
      </>
    );
  }
}

export default ContactForm;

const Button = styled.button`
  margin: 5px;
  background-color: #7b7bde;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #5858d7;
  }
`;
