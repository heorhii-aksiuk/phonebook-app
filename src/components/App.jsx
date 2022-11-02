import { ThemeProvider } from 'styled-components'
import ContactsView from '../views/ContactsView'
import GlobalStyle from '../styles'
import { light } from '../theme'
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import LoginView from '../views/LoginView'
import SignupView from '../views/SignupView'
import NotFoundView from '../views/NotFoundView'
import PrivateRoute from '../components/PrivateRoute'
import RestrictedRoute from './RestrictedRoute'

export default function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute
                  component={<ContactsView />}
                  redirectTo={'/login'}
                />
              }
            ></Route>
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  component={<ContactsView />}
                  redirectTo={'/login'}
                />
              }
            ></Route>
            <Route
              path="login"
              element={
                <RestrictedRoute
                  component={<LoginView />}
                  redirectTo={'/contacts'}
                />
              }
            ></Route>
            <Route
              path="signup"
              element={
                <RestrictedRoute
                  component={<SignupView />}
                  redirectTo={'/contacts'}
                />
              }
            ></Route>
            <Route path="*" element={<NotFoundView />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}
