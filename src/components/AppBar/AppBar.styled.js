import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  height: 72px;
  z-index: 1100;
  color: ${(props) => props.theme.mainTextColor};
  background-color: ${(props) => props.theme.accentColor};
  box-shadow: ${(props) => props.theme.appBarBoxShadow};
`
