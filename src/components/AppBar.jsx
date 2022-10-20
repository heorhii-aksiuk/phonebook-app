import styled from 'styled-components'
import { IoBookOutline } from 'react-icons/io5'
import { BsPlusCircle, BsSearch } from 'react-icons/bs'
import { IoExitOutline } from 'react-icons/io5'

import { useToggle } from '../hooks'
// import Button from './Button.styled'
import Modal from './Modal'

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
              <Item>
                <IconButton onClick={toggleModal} type="button">
                  <IoExitOutline color="#fff" size="25px" />
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

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */

  padding: 15px 20px;
  height: 60px;
  z-index: 1100;
  color: ${(props) => props.theme.mainTextColor};
  background-color: ${(props) => props.theme.accentColor};
  box-shadow: ${(props) => props.theme.appBarBoxShadow};
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 680px;
`

const Logo = styled.div`
  display: flex;
  /* flex-direction: column;
  justify-content: center; */
  align-items: center;
`

const LogoText = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 1;
`

const IconButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover {
    transform: scale(1.1);
  }
`

const Navigation = styled.nav``

const List = styled.ul`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`

const Item = styled.li`
  :not(:last-child) {
    padding-right: 15px;
  }
`
