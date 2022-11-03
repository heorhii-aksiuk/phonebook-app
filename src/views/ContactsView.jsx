import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts, selectFilter } from '../store/selectors'
import { setFilter } from '../store/contacts/slice'
import { addContact, deleteContact } from '../store/contacts/operations'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'

const ALERT_MESSAGE = (name) => `${name} is already exists!`

export default function ContactsView() {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)
  const contacts = useSelector(selectContacts)

  const handleSubmit = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      return alert(ALERT_MESSAGE(newContact.name))
    }
    dispatch(addContact(newContact))
  }

  const handleRemove = (id) => {
    dispatch(deleteContact(id))
  }

  const handleFilter = (event) => {
    const filter = event.target.value
    dispatch(setFilter(filter))
  }

  const filteredContacts = useMemo(() => {
    if (contacts) {
      return (
        contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
          )
          //TODO: move reverse in different function
          .reverse()
      )
    }
  }, [contacts, filter])

  return (
    <>
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
    </>
  )
}
