import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */

  padding: 15px 20px;
  height: 60px;
  z-index: 1100;
  color: ${(props) => props.theme.mainTextColor};
  background-color: ${(props) => props.theme.accentColor};
  box-shadow: ${(props) => props.theme.appBarBoxShadow};
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 680px;
`

export const Logo = styled.div`
  display: flex;
  /* flex-direction: column;
  justify-content: center; */
  align-items: center;
`

export const LogoText = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 1;
`

export const IconButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover {
    transform: scale(1.1);
  }
`

export const Navigation = styled.nav``

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`

export const Item = styled.li`
  :not(:last-child) {
    padding-right: 15px;
  }
`
