import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  padding: 15px 20px;
  height: 72px;
  z-index: 1100;
  color: ${(props) => props.theme.mainTextColor};
  background-color: ${(props) => props.theme.accentColor};
  box-shadow: ${(props) => props.theme.appBarBoxShadow};
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
`

export const My = styled.p`
  font-size: 20px;
  line-height: 1;
  font-weight: 900;
`

export const Phonebook = styled(My)``
