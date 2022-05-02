import { theme } from "@assets/theme"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import Paragrath from "."

describe('Paragraph Component', () => {
  it('Should render the paragraph', () => {
    render(
      <ThemeProvider theme={theme}>
        <Paragrath text="My Test" />
      </ThemeProvider>)

    expect(screen.getByText('My Test')).toBeInTheDocument()
  })
})