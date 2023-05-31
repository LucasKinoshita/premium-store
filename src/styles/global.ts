import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body, h1, h2, h3, h4, p, span, button {
    font-family: 'Montserrat', sans-serif;
  }
`

export default GlobalStyles
