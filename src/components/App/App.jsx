import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { selectFilter } from '../../store/selectors'
import { setFilter } from '../../store/contacts/filterSlice'
import {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from '../../store/contacts/contactsApi'
import AppBar from '../AppBar'
import Section from '../Section'
import ContactForm from '../ContactForm'
import ContactList from '../ContactList'
import GlobalStyle from '../../styles'
import { light } from '../../theme'

const ALERT_MESSAGE = (name) => `${name} is already exists!`

export default function App() {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)
  const { data: contacts } = useGetContactsQuery()
  const [addContact] = useAddContactMutation()
  const [deleteContact] = useDeleteContactMutation()

  const handleSubmit = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      return alert(ALERT_MESSAGE(newContact.name))
    }
    addContact(newContact)
  }

  const handleRemove = (name) => {
    deleteContact(name)
  }

  const handleFilter = (event) => {
    const filter = event.target.value
    dispatch(setFilter(filter))
  }

  const filteredContacts = useMemo(() => {
    if (contacts) {
      return [
        ...contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase()),
        ),
      ].reverse()
    }
  }, [contacts, filter])

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
