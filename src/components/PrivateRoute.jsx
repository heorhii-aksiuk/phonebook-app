import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectUserIsLogin } from '../store/selectors'

export default function PrivateRoute({
  component: Component,
  redirectTo = '/login',
}) {
  const isLogin = useSelector(selectUserIsLogin)
  return isLogin ? Component : <Navigate to={redirectTo} replace={true} />
}
