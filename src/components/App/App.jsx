import { useState, useMemo } from 'react'
import { useLocalStorage } from '../../hooks'
import Section from '../Section'
import ContactForm from '../ContactForm'
import ContactList from '../ContactList'
import GlobalStyle from '../../styles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../theme'
import AppBar from '../AppBar'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts, getFilter } from '../../redux/selectors'
import { addContact, deleteContact } from '../../redux/contactsSlice'
import { setFilter } from '../../redux/filterSlice'

const ALERT_MESSAGE = (name) => `${name} is already exists!`

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts')
  // const [filter, setFilter] = useState('')
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)

  const handleSubmit = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      return alert(ALERT_MESSAGE(newContact.name))
    }
    dispatch(addContact(newContact))
    // setContacts((contacts) => [newContact, ...contacts])
  }

  const handleFilter = (event) => {
    const filter = event.target.value
    dispatch(setFilter(filter))
  }

  const handleRemove = (name) => {
    dispatch(deleteContact(name))
    // setContacts(contacts.filter((contact) => contact.name !== name))
  }

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    [contacts, filter],
  )

  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <AppBar></AppBar>
        <Section title="Phonebook">
          <ContactForm onSubmitForm={handleSubmit}></ContactForm>
        </Section>
        <Section title="Contacts">
          <ContactList
            onFilterChange={handleFilter}
            contacts={filteredContacts}
            removeContact={handleRemove}
          ></ContactList>
        </Section>
      </ThemeProvider>
    </>
  )
}
