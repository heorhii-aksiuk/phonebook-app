import ContactItem from '../ContactItem/ContactItem';

export default function ContactList({
  removeContact,
  onFilterChange,
  contacts,
}) {
  return (
    <>
      <input onChange={onFilterChange} type="text"></input>
      <ul>
        {contacts.map(({ name, number }) => (
          <ContactItem
            key={name}
            name={name}
            number={number}
            removeContact={() => removeContact(name)}
          />
        ))}
      </ul>
    </>
  );
}
