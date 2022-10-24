import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoBookOutline } from 'react-icons/io5'
import { BsPlusCircle, BsSearch, BsSortUpAlt } from 'react-icons/bs'
import { IoExitOutline } from 'react-icons/io5'
import { TbArrowsSort } from 'react-icons/tb'
// import { useToggle } from '../hooks'
// import Button from './Button.styled'
// import Modal from './Modal'

export default function AppBar() {
  return (
    <>
      <Header>
        <LogoContainer>
          <LogoBox>
            <LogoIcon />
            <LogoText>Phonebook</LogoText>
          </LogoBox>
        </LogoContainer>
        <ControlContainer>
          <ControlList>
            <ControlItem>
              <SortIcon />
            </ControlItem>
            <ControlItem>
              <AddIcon />
            </ControlItem>
            <ControlItem>
              <SearchIcon />
            </ControlItem>
          </ControlList>
        </ControlContainer>
      </Header>
    </>
  )
}

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 425px;
  height: 100px;
  z-index: 1100;
  color: ${(props) => props.theme.mainTextColor};
  box-shadow: ${(props) => props.theme.appBarBoxShadow};
  border-radius: 0 0 5px 5px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(50%);
  background-color: ${(props) => props.theme.accentColor};
`
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.secondaryTextColor};
`

const LogoIcon = styled(IoBookOutline)`
  height: 24px;
  width: 24px;
`
const LogoText = styled.p`
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: 25px;
  font-weight: 300;
  line-height: 1;
`

const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(50%);
  color: ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border-radius: 0 0 5px 5px;
`

const ControlList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ControlItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`

const AddIcon = styled(BsPlusCircle)`
  height: 24px;
  width: 24px;
`
const SearchIcon = styled(BsSearch)`
  height: 24px;
  width: 24px;
`
const SortIcon = styled(BsSortUpAlt)`
  height: 24px;
  width: 24px;
`
