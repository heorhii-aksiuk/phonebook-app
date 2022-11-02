import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from '../store/selectors'

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component
}
