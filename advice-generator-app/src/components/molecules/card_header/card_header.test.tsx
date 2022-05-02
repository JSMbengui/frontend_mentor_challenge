import { theme } from "@assets/theme"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import CardHeader from "."

describe('CardHeader Component', () => {
  it('Should render the cardheader', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardHeader
          adviceId={1}
        />
      </ThemeProvider>
    )

    expect(screen.getByText(/ADVICE # 1/)).toBeInTheDocument()
  })
})