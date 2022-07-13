import { Component } from 'react';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

const LS_CONTACTS_KEY = 'contacts';
const LS_PARSE_ERROR_MESSAGE = `Can't parse "contacts" field from localStorage, so it's reset!`;
const ALERT_MESSAGE = (name) => `${name} is already exists!`;

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    try {
      const savedContacts = JSON.parse(localStorage.getItem(LS_CONTACTS_KEY));
      const condition =
        Array.isArray(savedContacts) &&
        savedContacts.every((el) => el.name && el.number);

      if (condition) {
        this.setState({ contacts: [...savedContacts] });
      }
    } catch (error) {
      console.error(
        LS_PARSE_ERROR_MESSAGE,
        localStorage.setItem(
          LS_CONTACTS_KEY,
          JSON.stringify(this.state.contacts),
        ),
      );
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        LS_CONTACTS_KEY,
        JSON.stringify(this.state.contacts),
      );
    }
  }

  handleSubmit = (contact) => {
    const { contacts } = this.state;
    if (contacts.some((el) => el.name === contact.name)) {
      return alert(ALERT_MESSAGE(contact.name));
    }
    this.setState((state) => ({
      contacts: [contact, ...state.contacts],
    }));
  };

  handleFilter = (e) => {
    const filter = e.target.value;
    this.setState({ filter });
  };

  handleRemove = (name) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((el) => el.name !== name),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmitForm={this.handleSubmit}></ContactForm>
        </Section>
        <Section title="Contacts">
          <ContactList
            onFilterChange={this.handleFilter}
            contacts={filteredContacts}
            removeContact={this.handleRemove}
          ></ContactList>
        </Section>
      </>
    );
  }
}

export default App;
