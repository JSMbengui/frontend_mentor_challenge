import { theme } from "@assets/theme"
import { AdviceType } from "@components/tampletes/app/types"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import Advice from "."

describe('Advice Component', () => {
  it('Should render the advice', () => {
    const fn = jest.fn()
    const adviceMock: AdviceType = {
      id: "advice1",
      title: 'my advice'
    }

    render(
      <ThemeProvider theme={theme}>
        <Advice
          advice={adviceMock}
          getNextAdvice={fn}
        />
      </ThemeProvider>
    )

    expect(screen.getByText(`"${adviceMock.title}"`)).toBeInTheDocument()
    expect(screen.getByText(/ADVICE # advice1/)).toBeInTheDocument()
  })
})