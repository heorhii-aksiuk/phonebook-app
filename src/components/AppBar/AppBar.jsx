// import ThemeSwitch from '../ThemeSwitch'
import { useToggle } from '../../hooks'
import Button from '../Button'
import Modal from '../Modal'
import { Header, Logo, My, Phonebook } from './AppBar.styled'

export default function AppBar() {
  const [showModal, toggleModal] = useToggle()

  return (
    <Header>
      <Logo>
        <My>My</My>
        <Phonebook>Phonebook</Phonebook>
      </Logo>
      {
        <Button onClick={toggleModal} type="button">
          +
        </Button>
      }
      {showModal && <Modal onClose={toggleModal}></Modal>}
    </Header>
  )
}
