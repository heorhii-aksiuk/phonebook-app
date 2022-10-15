import Button from '../Button'

export default function ContactItem({ name, phone, removeContact }) {
  return (
    <li key={name}>
      {name} - {phone}
      <Button onClick={removeContact} type="button">
        Delete
      </Button>
    </li>
  )
}
