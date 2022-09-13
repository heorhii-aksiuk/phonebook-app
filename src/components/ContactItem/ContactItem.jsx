import Button from '../Button';

export default function ContactItem({ name, number, removeContact }) {
  return (
    <li key={name}>
      {name} - {number}
      <Button onClick={removeContact} type="button">
        Delete
      </Button>
    </li>
  );
}
