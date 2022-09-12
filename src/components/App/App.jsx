import { useState } from 'react';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { useLocalStorage } from '../../hooks';

const ALERT_MESSAGE = (name) => `${name} is already exists!`;

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

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
