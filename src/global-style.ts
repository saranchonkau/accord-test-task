import { createGlobalStyle } from 'styled-components'
import { Colors } from './lib/style-guide'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-style: normal;
  }
  
  li {
    list-style: none;
  }

  body {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4rem;
  }

  #root {
    display: flex;
    min-height: 100vh;
    background: ${Colors.BG3};
  }
`
