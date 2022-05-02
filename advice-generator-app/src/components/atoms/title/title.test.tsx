import { render, screen } from "@testing-library/react"

import Title from "."

describe('Title Component', () => {
  it('Should render', () => {
    render(
      <Title text="My title" />
    )

    expect(screen.getByText(/"My title"/)).toBeInTheDocument()
  })
})