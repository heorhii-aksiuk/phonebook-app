import ContactItem from '../ContactItem'

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
          {contacts.map(({ name, number, id }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              removeContact={() => removeContact(id)}
            />
          ))}
        </ul>
      )}
    </>
  )
}
