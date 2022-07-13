import styled from 'styled-components';

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

const Button = styled.button`
  margin: 5px;
  background-color: #7b7bde;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #5858d7;
  }
`;
