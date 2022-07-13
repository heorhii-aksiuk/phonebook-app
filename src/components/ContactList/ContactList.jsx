import React, { Component } from 'react'
import ContactItem from '../ContactItem/ContactItem'

class ContactList extends Component {
  render() {
    const { removeContact, onFilterChange, contacts } = this.props
    return (
      <>
        <input onChange={onFilterChange} type="text"></input>
        <ul>
          {contacts.map(({ name, number }) => (
            <ContactItem
              key={name}
              name={name}
              number={number}
              removeContact={() => removeContact(name)}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default ContactList
