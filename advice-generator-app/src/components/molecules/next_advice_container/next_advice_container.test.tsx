import { theme } from "@assets/theme"

import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from "styled-components"

import NextAdviceContainer from "."

describe('NextAdviceContainer Component', () => {
  it('Should render the NextAdvice', async () => {
    const getNextAdvice = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <NextAdviceContainer
          getNextAdvice={getNextAdvice}
        />
      </ThemeProvider>
    )

    await userEvent.click(screen.getByTestId('next_advice'))

    expect(getNextAdvice).toHaveBeenCalledTimes(1)
  })
})