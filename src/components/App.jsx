import { ThemeProvider } from 'styled-components'
import ContactsView from '../views/ContactsView'
import GlobalStyle from '../styles'
import { light } from '../theme'
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'

export default function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<ContactsView />}></Route>
            <Route path="contacts" element={<ContactsView />}></Route>
            <Route path="login"></Route>
            <Route path="signup"></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}
