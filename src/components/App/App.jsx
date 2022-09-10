import { useState, useEffect } from 'react';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

const LS_CONTACTS_KEY = 'contacts';
const LS_PARSE_ERROR_MESSAGE = `Can't parse "contacts" field from localStorage, so it's reset!`;
const ALERT_MESSAGE = (name) => `${name} is already exists!`;

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const savedContacts = JSON.parse(
        window.localStorage.getItem(LS_CONTACTS_KEY),
      );
      const condition =
        Array.isArray(savedContacts) &&
        savedContacts.every((contact) => contact.name && contact.number);

      if (condition) {
        setContacts([...savedContacts]);
      }
    } catch (error) {
      console.error(
        LS_PARSE_ERROR_MESSAGE,
        window.localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify([])),
      );
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      window.localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleSubmit = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      return alert(ALERT_MESSAGE(newContact.name));
    }
    setContacts((contacts) => [newContact, ...contacts]);
  };

  const handleFilter = (event) => {
    const filter = event.target.value;
    setFilter(filter);
  };

  const handleRemove = (name) => {
    setContacts(contacts.filter((contact) => contact.name !== name));
  };

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
  // TODO: memo

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
  );
}
