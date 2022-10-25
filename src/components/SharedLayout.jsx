import AppBar from './AppBar'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}
