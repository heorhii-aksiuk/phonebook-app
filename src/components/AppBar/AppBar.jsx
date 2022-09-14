// import ThemeSwitch from '../ThemeSwitch'
import Button from '../Button'
import { Header, Logo, My, Phonebook } from './AppBar.styled'

export default function AppBar() {
  return (
    <Header>
      <Logo>
        <My>My</My>
        <Phonebook>Phonebook</Phonebook>
      </Logo>
      <Button>+</Button>
    </Header>
  )
}
