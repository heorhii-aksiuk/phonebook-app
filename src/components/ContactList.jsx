import ContactItem from './ContactItem'

export default function ContactList({
  removeContact,
  onFilterChange,
  contacts,
}) {
  return (
    <>
      <input onChange={onFilterChange} type="text"></input>
      {contacts && (
        <ul>
          {contacts.map(({ name, phone, id }) => (
            <ContactItem
              key={id}
              name={name}
              phone={phone}
              removeContact={() => removeContact(id)}
            />
          ))}
        </ul>
      )}
    </>
  )
}
