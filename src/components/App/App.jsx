import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { selectContacts, selectFilter } from '../../store/selectors'
import { setFilter } from '../../store/contacts/filterSlice'
import { addContact, deleteContact } from '../../store/contacts/itemsSlice'
import { useGetContactsQuery } from '../../store/contacts/contactsApi'
import AppBar from '../AppBar'
import Section from '../Section'
import ContactForm from '../ContactForm'
import ContactList from '../ContactList'
import GlobalStyle from '../../styles'
import { light } from '../../theme'

const ALERT_MESSAGE = (name) => `${name} is already exists!`

export default function App() {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)
  const { data } = useGetContactsQuery()
  console.log(data)

  const handleSubmit = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      return alert(ALERT_MESSAGE(newContact.name))
    }
    dispatch(addContact(newContact))
  }

  const handleFilter = (event) => {
    const filter = event.target.value
    dispatch(setFilter(filter))
  }

  const handleRemove = (name) => {
    dispatch(deleteContact(name))
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
