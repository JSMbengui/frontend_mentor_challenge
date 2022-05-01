import { createGlobalStyle } from "styled-components"

export interface ThemeInterface {
  colors: {
    lightCyan: string,
    neonGreen: string,
    grayishBlue: string,
    darkGrayishBlue: string,
    darkBlue: string
  }
}


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }
  body {
    font-size: 28px;
    font-weight: 800;
    font-family:monospace,monospace;
  }
`

export const theme: ThemeInterface = {
  colors: {
    lightCyan: 'hsl(193, 38%, 86%)',
    neonGreen: "hsl(150, 100%, 66%)",
    grayishBlue: "hsl(217, 19%, 38%)",
    darkGrayishBlue: "hsl(217, 19%, 24%)",
    darkBlue: "hsl(218, 23%, 16%)"
  },
}
