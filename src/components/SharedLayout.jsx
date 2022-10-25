import AppBar from './AppBar'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 767px;
`
