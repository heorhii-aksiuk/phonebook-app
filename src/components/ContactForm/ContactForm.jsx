import { useId, useState } from 'react'
// import Modal from '../Modal'
import Button from '../Button'

const INPUT = {
  NAME: {
    PATTERN: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    TITLE:
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles Miller',
  },
  NUMBER: {
    PATTERN: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
    //TODO: don't work, need to change pattern
    TITLE:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
}

export default function ContactForm({ onSubmitForm }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const id = useId()

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'name') setName(value)
    if (name === 'number') setNumber(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitForm({ name, number })
    setName('')
    setNumber('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={id + '-name'}>Name</label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id={id + '-name'}
          pattern={INPUT.NAME.PATTERN}
          title={INPUT.NAME.TITLE}
          required
        />
        <label htmlFor={id + '-number'}>Number</label>
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          id={id + '-number'}
          pattern={INPUT.NUMBER.PATTERN}
          title={INPUT.NUMBER.TITLE}
          required
        />
        <Button type="submit">Add contact</Button>
      </form>
      {/* <Modal></Modal> */}
    </>
  )
}
