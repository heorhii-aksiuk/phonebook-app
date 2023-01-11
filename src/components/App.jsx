import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { selectIsRefreshing } from '../store/selectors'
import { fetchCurrentUser } from '../store/user/operations'
import GlobalStyle from '../styles'
import { light } from '../theme'

import PrivateRoute from './PrivateRoute'
import RestrictedRoute from './RestrictedRoute'
import SharedLayout from './SharedLayout'
import { ContactsView, SignupView, LoginView, NotFoundView } from '../views'

export default function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return isRefreshing ? (
    //TODO: Refreshing component
    <p>...Refreshing</p>
  ) : (
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

//SourceTree test comment
