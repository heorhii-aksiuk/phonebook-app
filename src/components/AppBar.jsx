import styled from 'styled-components'
import { IoBookOutline } from 'react-icons/io5'
import { CiSquarePlus, CiSearch, CiLineHeight } from 'react-icons/ci'
// import { Link } from 'react-router-dom'
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
              <AddIcon />
            </ControlItem>
            <ControlItem>
              <SearchIcon />
            </ControlItem>
            <ControlItem>
              <SortIcon />
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

const AddIcon = styled(CiSquarePlus)`
  height: 34px;
  width: 34px;
`
const SearchIcon = styled(CiSearch)`
  height: 34px;
  width: 34px;
`
const SortIcon = styled(CiLineHeight)`
  height: 34px;
  width: 34px;
`
