import React, { Component } from 'react'
import styled from 'styled-components'

export class ContactItem extends Component {
  render() {
    const { name, number, removeContact } = this.props
    return (
      <li key={name}>
        {name} - {number}
        <Button onClick={removeContact} type="button">
          Delete
        </Button>
      </li>
    )
  }
}

export default ContactItem

const Button = styled.button`
  margin: 5px;
  background-color: #7b7bde;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #5858d7;
  }
`
