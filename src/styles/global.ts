import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --font-title: 'Poppins', sans-serif;
    --font-text: 'Lato', sans-serif;
    --gray-light: #E6E6E6;
    --gray-medium: #ACACAC;
    --gray: '#3D3D3D';
    --black-medium: #1A1A1A;
    --black: #000;
    --pink-medium: #FF0661;
    --pink: #75002B;
    --pink-gradient: linear-gradient(180deg, #E93A7A 0%, #FF0661 100%);
  }

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
`

export default GlobalStyles
