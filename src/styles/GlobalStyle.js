import { createGlobalStyle } from 'styled-components'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

const GlobalStyle = createGlobalStyle`h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-bottom: 0;
  margin-top: 0;
}

ul,
ol {
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

a {
  text-decoration: none;
}

body {
  font-family: ${(props) => props.theme.mainFont};
  color: ${(props) => props.theme.mainTextColor};
  background-color: ${(props) => props.theme.mainBackgroundColor};
  font-weight: 400;
}
`

export default GlobalStyle
