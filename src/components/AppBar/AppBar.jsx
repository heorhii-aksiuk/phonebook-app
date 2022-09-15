import { IoBookOutline } from 'react-icons/io5'
import { BsPlusCircle, BsSearch } from 'react-icons/bs'

import { useToggle } from '../../hooks'
// import Button from '../Button'
import Modal from '../Modal'
import {
  Header,
  Container,
  Logo,
  LogoText,
  IconButton,
  Navigation,
  List,
  Item,
} from './AppBar.styled'

export default function AppBar() {
  const [showModal, toggleModal] = useToggle()

  return (
    <>
      <Header>
        <Container>
          <Logo>
            <LogoText>
              <IoBookOutline color="#fff" size="24px" />
              Phonebook
            </LogoText>
          </Logo>

          <Navigation>
            <List>
              <Item>
                <IconButton onClick={toggleModal} type="button">
                  <BsPlusCircle color="#fff" size="20px" />
                </IconButton>
              </Item>
              <Item>
                <IconButton onClick={toggleModal} type="button">
                  <BsSearch color="#fff" size="20px" />
                </IconButton>
              </Item>
            </List>
          </Navigation>
        </Container>
      </Header>

      {showModal && <Modal onClose={toggleModal}></Modal>}
    </>
  )
}
