import { useState, useMemo } from 'react';
import { useLocalStorage } from '../../hooks';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

const ALERT_MESSAGE = (name) => `${name} is already exists!`;

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts');
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

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    [contacts, filter],
  );

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
