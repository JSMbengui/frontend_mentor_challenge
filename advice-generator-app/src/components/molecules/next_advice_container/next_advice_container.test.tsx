import { render, screen } from "@testing-library/react"

import NextAdviceContainer from "."

describe('NextAdviceContainer Component', () => {
  it('Should render the NextAdvice', () => {
    const getNextAdvice = jest.fn()

    render(
      <NextAdviceContainer
        getNextAdvice={getNextAdvice}
      />
    )

    // test if call getNextAdvice
  })
})